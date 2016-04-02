/**
 * Created by labuser on 20/03/16.
 */

"use strict";

// TODO : Comment out all log statements

function init() {

    // Add event listeners for top bar items
    var navigationItems = document.getElementsByClassName('titleListItem');
    for (var index = 0; index < navigationItems.length; ++index) {
        var navigationItem = navigationItems[index];
        if (navigationItem) {
            navigationItem.addEventListener('click', handleTitleListItemClick);
        }
    }

    // Add event listeners for challenge Navigation Items
    var navigationItems = document.getElementsByClassName('navigationItem');
    for (var index = 0; index < navigationItems.length; ++index) {
        var navigationItem = navigationItems[index];
        if (navigationItem) {
            navigationItem.addEventListener('click', handleNavigationItemClick);
        }
    }

    //TODO : get the challenge list details

    updateOpenCLList();
    updateOldCLList();
    updateMyCLList();

    showOpenChallengeWrapper();
}

function handleTitleListItemClick(e) {
    switch (e.target.id) {
        case "challengesListItem":
            showChallengeWrapper();
            break;
        case "leaderboardListItem":
            showLeaderboard();
            break;
        case "profileListItem":
            showProfile();
            break;
        default:
            break;
    }
}

function handleNavigationItemClick(e) {
    switch (e.target.id) {
        case "openChallengeItem":
            showOpenChallengeWrapper();
            break;
        case "newChallengeItem":
            showNewChallengeWrapper();
            break;
        case "oldChallengeItem":
            showOldChallengeWrapper();
            break;
        case "postedChallengesItem":
            showPostedChallengesWrapper();
            break;
        default:
            showOpenChallengeWrapper();
            break;
    }
}

function deActiveNavigationItems() {
    document.getElementById('openChallengeItem').classList.remove('active');
    document.getElementById('newChallengeItem').classList.remove('active');
    document.getElementById('oldChallengeItem').classList.remove('active');
    document.getElementById('postedChallengesItem').classList.remove('active');
}

function deActiveEditors() {
    document.getElementById('openChallengeWrapper').classList.remove('active');
    document.getElementById('newChallengeWrapper').classList.remove('active');
    document.getElementById('oldChallengeWrapper').classList.remove('active');
    document.getElementById('postedChallengesWrapper').classList.remove('active');
}


// Open Challenge Scripts

var openChallengeQues = CodeMirror(document.getElementById('openClQues'), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    continueComments: "Enter",
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

var openChallengeSol = CodeMirror(document.getElementById('openClSol'), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

function initOpenChallengeStructure() {

    // initialize open challenge wrapper options
    document.getElementById('showOpenChallengeOption').addEventListener('click', showChallenge);
    document.getElementById('showOpenChallengeCommentsOption').addEventListener('click', showComments);

    //TODO : update title with the openChallenge title
    document.getElementById('openChallengeTitle').innerHTML = 'Challenge#1';
}

function showOpenChallengeWrapper() {

    deActiveNavigationItems();
    deActiveEditors();

    document.getElementById('openChallengeItem').classList.add('active');
    document.getElementById('openChallengeWrapper').classList.add('active');

    showOpenClList();

    // Show challenge DIV by default
    // showChallenge();
}

function showOpenClList() {

    document.getElementById('openChallengeListWrapper').classList.add('active');
    document.getElementById('openChallenge').classList.remove('active');

    hideChallengeSubmissionList();
}

function updateOpenCLList(challengeList) {
    // TODO: REMOVE THIS LINE, this is just for testing
    challengeList = challengeList || [{
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }];

    var challengeListDOM = document.getElementById('openChallengeList');
    //Clear prev child list
    while (challengeListDOM.lastChild)
        challengeListDOM.removeChild(challengeListDOM.lastChild);

    if (!challengeList) {
        //TODO: show warning of empty challenge list
        return;
    }

    var documentFragment = document.createDocumentFragment();
    for (var index = 0; index < challengeList.length; ++index) {
        var listNode = document.createElement('li');

        var challengeNameNode = document.createElement('div');
        challengeNameNode.classList.add('challengeName');
        challengeNameNode.appendChild(document.createTextNode(challengeList[index].title));
        listNode.appendChild(challengeNameNode);

        var challengeOwnerNode = document.createElement('div');
        challengeOwnerNode.classList.add('challengeOwner');
        challengeOwnerNode.appendChild(document.createTextNode('By ' + challengeList[index].author));
        listNode.appendChild(challengeOwnerNode);

        listNode.addEventListener('click', (function (challenge) {
            return function () {
                showSelectedOpenChallenge(challenge);
            };
        })(challengeList[index]));

        documentFragment.appendChild(listNode);
    }

    challengeListDOM.appendChild(documentFragment);
}

function showSelectedOpenChallenge(challenge) {
    document.getElementById('openChallengeListWrapper').classList.remove('active');
    document.getElementById('openChallenge').classList.add('active');

    openChallengeQues.setValue(challenge.question || '');
    openChallengeQues.refresh();

    openChallengeSol.setValue(challenge.solution || '');
    openChallengeSol.refresh();

    updateOpenClComments(challenge);

    updateChallengeSubmissionsList(challenge);
    showChallengeSubmissionList();
}


function submitSol() {
    openChallengeQues.setValue(openChallengeSol.getValue());
    openChallengeQues.refresh();
    console.log(openChallengeSol.getValue());

    //TODO: Send the solution to the server

    //TODO: Send a mail to the Challenge owner to validate
}

function resetSol() {
    openChallengeSol.setValue('');
}

function postCommentOnChallengeFile(challenge, comment) {

    // Create a bot
    // Ref : https://api.slack.com/bot-users
    // Ref : Register your app @ https://api.slack.com/applications
    // Posting comments on the challenge file
    // Ref: https://api.slack.com/methods/files.comments.add
    // TODO : Create bot and obfuscate the bot token

    if (!challenge || !challenge.fileID || !comment)
        return;

    var http = new XMLHttpRequest();
    var url = 'https://slack.com/api/files.comments.add';
    var params = "token=xoxb-28307701090-yAICqWwf47Ba9WUH5gj92f5C&file=" + challenge.fileID + "&comment=" + comment;
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }
}

// function showChallenge(){
//     document.getElementById('openChallengeQuesWrapper').classList.add('active');
//     document.getElementById('showOpenChallengeOption').classList.add('active');
//
//     document.getElementById('openClCommentsWrapper').classList.remove('active');
//     document.getElementById('showOpenChallengeCommentsOption').classList.remove('active');
// }
//
// function showComments(){
//     document.getElementById('openChallengeQuesWrapper').classList.remove('active');
//     document.getElementById('showOpenChallengeOption').classList.remove('active');
//
//     document.getElementById('openClCommentsWrapper').classList.add('active');
//     document.getElementById('showOpenChallengeCommentsOption').classList.add('active');
// }

function updateOpenClComments(challenge) {
    var commentList = document.getElementById('openClCommentsList');
    //Clear prev child list
    while (commentList.lastChild)
        commentList.removeChild(commentList.lastChild);

    if (!challenge.comments) {
        //TODO: show warning of empty challenge list
        return;
    }

    var documentFragment = document.createDocumentFragment();
    for (var index = 0; index < challenge.comments.length; ++index) {
        var listNode = document.createElement('li');

        var commentBy = document.createElement('div');
        commentBy.classList.add('commentBy');
        commentBy.appendChild(document.createTextNode(challenge.comments[index].By));
        listNode.appendChild(commentBy);

        var commentTextNode = document.createElement('div');
        commentTextNode.classList.add('commentText');
        commentTextNode.appendChild(document.createTextNode(challenge.comments[index].comment));
        listNode.appendChild(commentTextNode);

        documentFragment.appendChild(listNode);
    }

    commentList.appendChild(documentFragment);
}

function submitOpenClComment() {

    // TODO : get the current user details
    var curUser = 'Tester';

    var comment = document.getElementById('openClComment').value;
    postCommentOnChallengeFile(comment);

    // TODO : send the comment to the server

    // update the comment list
    var commentList = document.getElementById('openClCommentsList');
    var listNode = document.createElement('li');

    var commentBy = document.createElement('div');
    commentBy.classList.add('commentBy');
    commentBy.appendChild(document.createTextNode(curUser));
    listNode.appendChild(commentBy);

    var commentTextNode = document.createElement('div');
    commentTextNode.classList.add('commentText');
    commentTextNode.appendChild(document.createTextNode(comment));
    listNode.appendChild(commentTextNode);
    commentList.appendChild(listNode);

    resetOpenClComment();
}

function resetOpenClComment() {
    document.getElementById('openClComment').value = '';
}


// Old Challenge Scripts

var oldChallengeQues = CodeMirror(document.getElementById('oldClQues'), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

var oldChallengeSol = CodeMirror(document.getElementById('oldClSol'), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

function showOldChallengeWrapper() {

    deActiveNavigationItems();
    deActiveEditors();

    document.getElementById('oldChallengeItem').classList.add('active');
    document.getElementById('oldChallengeWrapper').classList.add('active');
    showOldClList();
}

function showOldClList() {

    document.getElementById('oldChallengeListWrapper').classList.add('active');
    document.getElementById('oldChallenge').classList.remove('active');

    hideChallengeSubmissionList();
}

function updateOldCLList(challengeList) {
    // TODO: REMOVE THIS LINE, this is just for testing
    challengeList = challengeList || [{
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }];

    var challengeListDOM = document.getElementById('oldChallengeList');
    //Clear prev child list
    while (challengeListDOM.lastChild)
        challengeListDOM.removeChild(challengeListDOM.lastChild);

    if (!challengeList) {
        //TODO: show warning of empty challenge list
        return;
    }

    var documentFragment = document.createDocumentFragment();
    for (var index = 0; index < challengeList.length; ++index) {
        var listNode = document.createElement('li');

        var challengeNameNode = document.createElement('div');
        challengeNameNode.classList.add('challengeName');
        challengeNameNode.appendChild(document.createTextNode(challengeList[index].title));
        listNode.appendChild(challengeNameNode);

        var challengeOwnerNode = document.createElement('div');
        challengeOwnerNode.classList.add('challengeOwner');
        challengeOwnerNode.appendChild(document.createTextNode('By ' + challengeList[index].author));
        listNode.appendChild(challengeOwnerNode);

        listNode.addEventListener('click', (function (challenge) {
            return function () {
                showSelectedOldChallenge(challenge);
            };
        })(challengeList[index]));

        documentFragment.appendChild(listNode);
    }

    challengeListDOM.appendChild(documentFragment);
}

function showSelectedOldChallenge(challenge) {
    document.getElementById('oldChallengeListWrapper').classList.remove('active');
    document.getElementById('oldChallenge').classList.add('active');

    oldChallengeQues.setValue(challenge.question || '');
    oldChallengeQues.refresh();

    oldChallengeSol.setValue(challenge.solution || '');
    oldChallengeSol.refresh();

    updateArchivedClComments(challenge);

    updateChallengeSubmissionsList(challenge);
    showChallengeSubmissionList();
}

// function showOldChallenge(){
//     document.getElementById('oldChallengeQuesWrapper').classList.add('active');
//     document.getElementById('showOldChallengeOption').classList.add('active');
//
//     document.getElementById('oldClCommentsWrapper').classList.remove('active');
//     document.getElementById('showOldChallengeCommentsOption').classList.remove('active');
// }
//
// function showOldClComments(){
//     document.getElementById('oldChallengeQuesWrapper').classList.remove('active');
//     document.getElementById('showOldChallengeOption').classList.remove('active');
//
//     document.getElementById('oldClCommentsWrapper').classList.add('active');
//     document.getElementById('showOldChallengeCommentsOption').classList.add('active');
// }

function updateArchivedClComments(challenge) {
    var commentList = document.getElementById('oldClCommentsList');
    //Clear prev child list
    while (commentList.lastChild)
        commentList.removeChild(commentList.lastChild);

    if (!challenge.comments) {
        //TODO: show warning of empty challenge list
        return;
    }

    var documentFragment = document.createDocumentFragment();
    for (var index = 0; index < challenge.comments.length; ++index) {
        var listNode = document.createElement('li');

        var commentBy = document.createElement('div');
        commentBy.classList.add('commentBy');
        commentBy.appendChild(document.createTextNode(challenge.comments[index].By));
        listNode.appendChild(commentBy);

        var commentTextNode = document.createElement('div');
        commentTextNode.classList.add('commentText');
        commentTextNode.appendChild(document.createTextNode(challenge.comments[index].comment));
        listNode.appendChild(commentTextNode);

        documentFragment.appendChild(listNode);
    }

    commentList.appendChild(documentFragment);
}


// New Challenge Scripts

var newChallengeQues = CodeMirror(document.getElementById('newClQues'), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

function showNewChallengeWrapper() {

    deActiveNavigationItems();
    deActiveEditors();

    document.getElementById('newChallengeItem').classList.add('active');
    document.getElementById('newChallengeWrapper').classList.add('active');
    newChallengeQues.refresh();

    updateChallengeSubmissionsList();

    hideChallengeSubmissionList();
}

function submitQues() {
    console.log(newChallengeQues.getValue('\n'));

    // Create a bot
    // Ref : https://api.slack.com/bot-users
    // Ref : https://api.slack.com/methods/files.upload
    // Ref : Register your app @ https://api.slack.com/applications
    // TODO : obfuscate the bot token
    var http = new XMLHttpRequest();
    var url = 'https://slack.com/api/files.upload';
    var params = "token=xoxb-28307701090-yAICqWwf47Ba9WUH5gj92f5C&content=" + newChallengeQues.getValue() + "&filetype=javascript&channels=#webhooksinteg&title=ChallengeFromWeb&initial_comment='Post your answer @'https://google.com'";
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
            var responseObj = JSON.parse(http.responseText);
            var fileID = responseObj.file.id;
            //TODO : Save the fileID info of the challenge for the future ref to post solution
        }
    }
    http.send(params);
}

function postMessageOnCodeChallengePage() {

    // Sending the incoming webhooks to the Slack page
    // Ref: https://api.slack.com/incoming-webhooks

    // var http = new XMLHttpRequest();
    // var url = "https://hooks.slack.com/services/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";
    // var params = 'payload={"text": "'+ newChallengeQues.getValue('\n') + '"}';
    // http.open("POST", url, true);
    //
    // //Send the proper header information along with the request
    // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // http.onreadystatechange = function() {//Call a function when the state changes.
    //     if(http.readyState == 4 && http.status == 200) {
    //         console.log(http.responseText);
    //     }
    // }
    // http.send(params);
}

function resetQues() {
    newChallengeQues.setValue('');
}

function changePostChallengeEditMode() {
    newChallengeQues.setOption('mode', document.getElementById('challengeType').value);
}


// Posted Challenge list related Scripts

var postedChallengeQues = CodeMirror(document.getElementById('postedClQues'), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

var postedChallengeSol = CodeMirror(document.getElementById('postedClSol'), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

function showPostedChallengesWrapper() {

    deActiveNavigationItems();
    deActiveEditors();

    document.getElementById('postedChallengesItem').classList.add('active');
    document.getElementById('postedChallengesWrapper').classList.add('active');
    showPostedClList();
}

function showPostedClList() {

    document.getElementById('postedChallengeListWrapper').classList.add('active');
    document.getElementById('postedChallenge').classList.remove('active');

    hideChallengeSubmissionList();
}

function updateMyCLList(challengeList) {

    // TODO: REMOVE THIS LINE, this is just for testing
    challengeList = challengeList || [{
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#1',
            author: 'Author 1',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#2',
            author: 'Author 2',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#3',
            author: 'Author 3',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }, {
            title: 'Challenge#4',
            author: 'Author 4',
            comments: [{'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}, {
                'By': 'Author 1',
                comment: 'This is sample Comment'
            }, {'By': 'Author 1', comment: 'This is sample Comment'}]
        }];

    var challengeListDOM = document.getElementById('postedChallengeList');
    //Clear prev child list
    while (challengeListDOM.lastChild)
        challengeListDOM.removeChild(challengeListDOM.lastChild);

    if (!challengeList) {
        //TODO: show warning of empty challenge list
        return;
    }

    var documentFragment = document.createDocumentFragment();
    for (var index = 0; index < challengeList.length; ++index) {
        var listNode = document.createElement('li');

        var challengeNameNode = document.createElement('div');
        challengeNameNode.classList.add('challengeName');
        challengeNameNode.appendChild(document.createTextNode(challengeList[index].title));
        listNode.appendChild(challengeNameNode);

        listNode.addEventListener('click', (function (challenge) {
            return function () {
                showSelectedPostedChallenge(challenge);
            };
        })(challengeList[index]));

        documentFragment.appendChild(listNode);
    }

    challengeListDOM.appendChild(documentFragment);
}


function showSelectedPostedChallenge(challenge) {
    document.getElementById('postedChallengeListWrapper').classList.remove('active');
    document.getElementById('postedChallenge').classList.add('active');

    postedChallengeQues.setValue(challenge.question || '');
    postedChallengeQues.refresh();

    postedChallengeSol.setValue(challenge.solution || '');
    postedChallengeSol.refresh();

    updatePostedClComments(challenge);

    updateChallengeSubmissionsList(challenge);
    showChallengeSubmissionList();
}

function showPostedChallenge() {
    document.getElementById('postedChallengeWrapper').classList.add('active');
    document.getElementById('showPostedChallengeOption').classList.add('active');

    // document.getElementById('postedClCommentsWrapper').classList.remove('active');
    // document.getElementById('showPostedChallengeCommentsOption').classList.remove('active');

    document.getElementById('submittedSolutionsWrapper').classList.remove('active');
    document.getElementById('showPostedChallengeSubmissionsOption').classList.remove('active');
}

// function showPostedClComments(){
//     document.getElementById('postedChallengeQuesWrapper').classList.remove('active');
//     document.getElementById('showPostedChallengeOption').classList.remove('active');
//
//     document.getElementById('postedClCommentsWrapper').classList.add('active');
//     document.getElementById('showPostedChallengeCommentsOption').classList.add('active');
//
//     document.getElementById('submittedSolutionsWrapper').classList.remove('active');
//     document.getElementById('showPostedChallengeSubmissionsOption').classList.remove('active');
// }

function updatePostedClComments(challenge) {
    var commentList = document.getElementById('postedClCommentsList');
    //Clear prev child list
    while (commentList.lastChild)
        commentList.removeChild(commentList.lastChild);

    if (!challenge.comments) {
        //TODO: show warning of empty challenge list
        return;
    }

    var documentFragment = document.createDocumentFragment();
    for (var index = 0; index < challenge.comments.length; ++index) {
        var listNode = document.createElement('li');

        var commentBy = document.createElement('div');
        commentBy.classList.add('commentBy');
        commentBy.appendChild(document.createTextNode(challenge.comments[index].By));
        listNode.appendChild(commentBy);

        var commentTextNode = document.createElement('div');
        commentTextNode.classList.add('commentText');
        commentTextNode.appendChild(document.createTextNode(challenge.comments[index].comment));
        listNode.appendChild(commentTextNode);

        documentFragment.appendChild(listNode);
    }

    commentList.appendChild(documentFragment);
}

function updateClSubmissionList(challenge) {
    // TODO : update the challenge submission list
}

function showPostedClSubmissions() {
    document.getElementById('postedChallengeWrapper').classList.remove('active');
    document.getElementById('showPostedChallengeOption').classList.remove('active');

    // document.getElementById('postedClCommentsWrapper').classList.remove('active');
    // document.getElementById('showPostedChallengeCommentsOption').classList.remove('active');

    document.getElementById('submittedSolutionsWrapper').classList.add('active');
    document.getElementById('showPostedChallengeSubmissionsOption').classList.add('active');
}


// Challenge Submission list related scripts

function updateChallengeSubmissionsList(challenge) {
    //TODO: get the submission list for the challenge and update the List

    // TODO: REMOVE THIS LINE, this is just for testing
    challenge = challenge || {
            title: 'Challenge#1',
            author: 'Author 1',
            submissionList: ['Venky', 'Manga', 'Hari', 'Nikhil', 'Siva', 'Kalyan', 'Risky']
        };

    var submissionListDOM = document.getElementById('submissionList');
    //Clear prev child list
    while (submissionListDOM.lastChild)
        submissionListDOM.removeChild(submissionListDOM.lastChild);

    if (!challenge.submissionList || challenge.submissionList.length == 0) {
        document.getElementById('noSubmissions').style.display = 'block';
        document.getElementById('submissionListWrapper').style.display = 'none';
        return;
    }

    document.getElementById('noSubmissions').style.display = 'none';
    document.getElementById('submissionListWrapper').style.display = 'block';

    var documentFragment = document.createDocumentFragment();
    for (var index = 0; index < challenge.submissionList.length; ++index) {
        var listNode = document.createElement('li');
        listNode.appendChild(document.createTextNode(challenge.submissionList[index]));
        documentFragment.appendChild(listNode);
    }

    submissionListDOM.appendChild(documentFragment);
}

function hideChallengeSubmissionList() {
    document.getElementById('challengeSubmissions').style.display = 'none';
}

function showChallengeSubmissionList() {
    document.getElementById('challengeSubmissions').style.display = 'block';
}

function showChallengeWrapper() {
    document.getElementById('challengeWrapper').classList.add('active');
    document.getElementById('leaderboardWrapper').classList.remove('active');
    document.getElementById('profileWrapper').classList.remove('active');

    showOpenChallengeWrapper();
}

function showLeaderboard() {
    document.getElementById('challengeWrapper').classList.remove('active');
    document.getElementById('leaderboardWrapper').classList.add('active')
    document.getElementById('profileWrapper').classList.remove('active');
}

function showProfile() {
    document.getElementById('challengeWrapper').classList.remove('active');
    document.getElementById('leaderboardWrapper').classList.remove('active');
    document.getElementById('profileWrapper').classList.add('active');
}

init();