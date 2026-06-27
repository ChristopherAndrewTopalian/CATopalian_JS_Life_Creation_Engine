// makeInterface.js

function makeInterface()
{
    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JS_Life_Creation_Engine';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JS Life Creation Engine';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.color = 'rgb(0, 255, 255)';
    titleAndLink.style.lineHeight = '12px';
    ba(titleAndLink);

    //-//

    let menuContainer = ce('div');
    menuContainer.style.zIndex = 4;
    ba(menuContainer);

    //-//

    let tutorialDetails = ce('details');
    menuContainer.append(tutorialDetails);

    let tutorialSummary = ce('summary');
    tutorialSummary.textContent = 'Tutorials';
    tutorialDetails.append(tutorialSummary);

    //-//

    let tutorialsBtnContainer = ce('div');
    tutorialsBtnContainer.style.border = 'solid 1px rgb(100, 100, 100)';
    tutorialsBtnContainer.style.display = 'flex';
    tutorialsBtnContainer.style.flexDirection = 'column';
    tutorialDetails.append(tutorialsBtnContainer);

    for (let x = 0; x < LIFE_CREATIONS.length; x++)
    {
        let pageBtn = ce('button');
        pageBtn.onmouseover = function()
        {
            hoverSound();
        };
        pageBtn.onclick = function()
        {
            clickSound();
            ge('theFrame').src = LIFE_CREATIONS[x].url;
        };
        pageBtn.textContent = LIFE_CREATIONS[x].name;
        pageBtn.style.fontSize = 15 + 'px';
        pageBtn.style.fontWeight = 'bold';
        pageBtn.style.alignSelf = 'flex-start';
        tutorialsBtnContainer.append(pageBtn);
    }

    //-//

    let theFrame = ce('iframe');
    theFrame.style.width = '99%';
    theFrame.style.height = '300px';
    theFrame.id = 'theFrame';
    theFrame.src = LIFE_CREATIONS[0].url;
    ba(theFrame);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

