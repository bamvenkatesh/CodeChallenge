/**
 * Created by labuser on 20/03/16.
 */

var openChallengeQues = CodeMirror(document.getElementById('openClQues'),{
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    continueComments: "Enter",
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

var openChallengeSol = CodeMirror(document.getElementById('openClSol'),{
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

var newChallengeQues = CodeMirror(document.getElementById('newClQues'),{
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

var oldChallengeQues = CodeMirror(document.getElementById('oldClQues'),{
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

var oldChallengeSol = CodeMirror(document.getElementById('oldClSol'),{
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    continueComments: "Enter",
    readOnly: true,
    cursorBlinkRate: -1,    // negative value hides the cursor
    extraKeys: {"Ctrl-Q": "toggleComment"}
});

function submitQues(){
    alert(newChallengeQues.getValue('\n'));
    var http = new XMLHttpRequest();
    var url = "https://hooks.slack.com/services/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";
    var params = 'payload={"text": "This is a line of text in a channel.\nAnd this is another line of text."}';
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }
    http.send(params);
}

function resetQues() {
    newChallengeQues.setValue('');
}

function submitSol(){
    openChallengeQues.setValue(openChallengeSol.getValue());
    openChallengeQues.refresh();
    alert(openChallengeSol.getValue());
}

function resetSol(){
    openChallengeSol.setValue('');
}

function deActiveNavigationItems(){
    document.getElementById('openChallengeItem').classList.remove('active');
    document.getElementById('newChallengeItem').classList.remove('active');
    document.getElementById('oldChallengeItem').classList.remove('active');
}

function deActiveEditors(){
    document.getElementById('openChallengeWrapper').classList.remove('active');
    document.getElementById('newChallengeWrapper').classList.remove('active');
    document.getElementById('oldChallengeWrapper').classList.remove('active');
}

function showOldClList() {
    document.getElementById('oldChallengeListWrapper').classList.add('active');
    document.getElementById('oldChallenge').classList.remove('active');
}

function showSelectedOldChallenge(challenge) {
    document.getElementById('oldChallengeListWrapper').classList.remove('active');
    document.getElementById('oldChallenge').classList.add('active');

    oldChallengeQues.setValue(challenge.question);
    oldChallengeQues.refresh();

    oldChallengeSol.setValue(challenge.solution);
    oldChallengeSol.refresh();
}

function handleNavigationItemClick(e) {
    deActiveNavigationItems();
    deActiveEditors();

    switch (e.target.id){
        case "openChallengeItem":
            document.getElementById('openChallengeItem').classList.add('active');
            document.getElementById('openChallengeWrapper').classList.add('active');
            openChallengeQues.refresh();
            openChallengeSol.refresh();
            break;
        case "newChallengeItem":
            document.getElementById('newChallengeItem').classList.add('active');
            document.getElementById('newChallengeWrapper').classList.add('active');
            newChallengeQues.refresh();
            break;
        case "oldChallengeItem":
            document.getElementById('oldChallengeItem').classList.add('active');
            document.getElementById('oldChallengeWrapper').classList.add('active');
            showOldClList();
            break;
        default:
            document.getElementById('openChallengeItem').classList.add('active');
            document.getElementById('openChallengeWrapper').classList.add('active');
            openChallengeQues.refresh();
            openChallengeSol.refresh();
            break;
    }
}
var navigationItems = document.getElementsByClassName('navigationItem');
for(var index = 0 ; index < navigationItems.length; ++index){
    var navigationItem = navigationItems[index];
    if(navigationItem){
        navigationItem.addEventListener('click',handleNavigationItemClick);
    }
}
