#!/usr/bin/env bash

# [Git Hook] commit prefix 
# Commit 시 Branch 의 issue number를 자동으로 커밋 메세지에 삽입

# 실행권한을 부여해야 스크립트를 실행할 수 있습니다 
# chmod +x ./add-issue-to-commit.sh

COMMIT_MSG_FILE=$1

branch_name=`git rev-parse --abbrev-ref HEAD`
issue_number=`echo ${branch_name} | cut -f2 -d '/' | cut -f1 -d '_'`
first_line=`head -n1 ${COMMIT_MSG_FILE}`

echo Issue number: $issue_number

number_re='^[0-9]+$'
issue_re='#[0-9]+'
issue_prefix='ClimbFight'

if [[ $first_line =~ $issue_prefix ]]; then
# 커밋 첫번째 라인이 [ClimbFight~] 와 같이 수동으로 입력 되었을때 수정하지 않음
    echo 커밋 메세지에 수동으로 이슈를 입력
elif [[ $first_line =~ $issue_re ]]; then
# 커밋 첫번째 라인이 "#number 메세지" 와 같은 형식을 가질 때 
    manual_issue_number=`echo ${first_line} | cut -f2 -d '#' | cut -f1 -d ' '`
    sed -i.bak "1s/#${manual_issue_number}/[$issue_prefix#$manual_issue_number] /" $COMMIT_MSG_FILE
elif [[ $issue_number =~ $number_re ]]; then
# 이 외에 branch 에 issue number가 있을 때
    sed -i.bak "1s/^/[$issue_prefix#$issue_number] /" $COMMIT_MSG_FILE
fi