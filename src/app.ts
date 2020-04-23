const zerotwo = () => {
    var quoteNum = Math.floor((Math.random() * 8) + 1);
    switch (quoteNum) {
        case 1: var quoteResult = 'I think I have taken a liking to you. Won\'t you be my darling?'; break
        case 2: var quoteResult = 'I like the look in your eyes. It makes my heart race. You are now my darling!'; break
        case 3: var quoteResult = 'Wow, your taste makes my heart race. It bites and lingers... The taste of danger. You are now my darling!'; break
        case 4: var quoteResult = 'Once we die, we\ll only be a statistic. It won\'t matter what we were called.'; break
        case 5: var quoteResult = 'Don\'t worry, we\'ll always be together. Until the day we die.'; break
        case 6: var quoteResult = 'The weak ones die, big deal.'; break
        case 7: var quoteResult = 'If you have anything you wanna say, you better spit it out while you can. Because you\'re all going to die sooner or later.'; break
        case 8: var quoteResult = 'It\'s been a long time since I last saw a human cry.'; break
        default: var quoteResult = 'I think I have taken a liking to you. Won\'t you be my darling?'; break
    }
    return quoteResult;
}
export = zerotwo;