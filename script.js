const quotes = [
    "To succeed in the world it is not enough to be stupid - one must also be polite.",
    "I would rather obey a fine lion, much stronger than myself, than two hundred rats of my own species.",
    "Meditation is the dissolution of thoughts in Eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
    "We are rarely proud when we are alone.",
    "Injustice in the end produces independence.",
    "Madness is to think of too many things in succession too fast, or of one thing too exclusively.",
    "When it is a question of money, everybody is of the same religion.",
    "Opinions have caused more ills than the plague or earthquakes on this little globe of ours.",
    "If you have two religions in your land, the two will cut each other’s throats; but if you have thirty religions, they will dwell in peace",
    "Minds differ still more than faces.",
    "It is not inequality which is the real misfortune, it is dependence.",
    "Let us read, and let us dance; these two amusements will never do any harm to the world.",
    "Life is a shipwreck, but we must not forget to sing in the lifeboats",
    "It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets",
    "Those who can make you believe absurdities, can make you commit atrocities.",
    "Love truth, but pardon error.",
    "I have wanted to kill myself a hundred times, but somehow I am still in love with life. This ridiculous weakness is perhaps one of our more stupid melancholy propensities, for is there anything more stupid than to be eager to go on carrying a burden which one would gladly throw away, to loathe one’s very being and yet to hold it fast, to fondle the snake that devours us until it has eaten our hearts away?",
    "I have never made but one prayer to God, a very short one: Oh Lord, make my enemies ridiculous. And God granted it.",
    "God is a comedian playing to an audience that is too afraid to laugh.",
    "Every man is guilty of all the good he did not do.",
    "Despite the enormous quantity of books, how few people read! And if one reads profitably, one would realize how much stupid stuff the vulgar herd is content to swallow every day.",
    "The most important decision you make is to be in a good mood.",
    "It is better to risk saving a guilty person than to condemn an innocent one.",
    "Think for yourself and let others enjoy the privilege of doing so too.",
    "Faith consists in believing what reason cannot.",
    "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
    "Our wretched species is so made that those who walk on the well-trodden path always throw stones at those who are showing a new road.",
    "The human brain is a complex organ with the wonderful power of enabling man to find reasons for continuing to believe whatever it is that he wants to believe.",
    "Let us cultivate our garden.",
    "The comfort of the rich depends upon an abundant supply of the poor.",
    "What is history? The lie that everyone agrees on...",
    "The art of medicine consists of amusing the patient while nature cures the disease.",
    "It is not enough to conquer; one must learn to seduce.",
    "Men will always be mad, and those who think they can cure them are the maddest of all.",
    "Man is free at the instant he wants to be.",
    "Judge a man by his questions rather than by his answers.",
    "The more I read, the more I acquire, the more certain I am that I know nothing.",
    "Common sense is not so common.",
    "I don’t know where I am going, but I am on my way",
    "Fools have a habit of believing that everything written by a famous author is admirable. For my part I read only to please myself and like only what suits my taste.",
    "Dare to think for yourself.",
    "It is dangerous to be right in matters on which the established authorities are wrong.",
    "God is a circle whose center is everywhere and circumference nowhere.",
    "The secret of being a bore is to tell everything.",
    "Doubt is an uncomfortable condition, but certainty is a ridiculous one.",
    "Cherish those who seek the truth but beware of those who find it.",
    "Every man is a creature of the age in which he lives and few are able to raise themselves above the ideas of the time.",
    "If God did not exist, it would be necessary to invent him.",
    "Prejudices are what fools use for reason.",
    "We never live; we are always in the expectation of living.",
    "Don't think money does everything or you are going to end up doing everything for money.",
    "No opinion is worth burning your neighbor for.",
    "The discovery of what is true and the practice of that which is good are the two most important aims of philosophy.",
    "Men argue. Nature acts.",
    "Martin in particular concluded that man was born to live either in the convulsions of misery, or in the lethargy of boredom.",
    "Is politics nothing other than the art of deliberately lying?",
    "There is a wide difference between speaking to deceive, and being silent to be impenetrable.",
    "Answer me, you who believe that animals are only machines. Has nature arranged for this animal to have all the machinery of feelings only in order for it not to have any at all?",
    "The greatest consolation in life is to say what one thinks.",
    "It is love; love, the comfort of the human species, the preserver of the universe, the soul of all sentient beings, love, tender love.",
    "There are truths which are not for all men, nor for all times.",
    "No problem can stand the assault of sustained thinking.",
    "Religion began when the first scoundrel met the first fool.",
    "Sensual pleasure passes and vanishes, but the friendship between us, the mutual confidence, the delight of the heart, the enchantment of the soul, these things do not perish and can never be destroyed.",
    "If we do not find anything very pleasant, at least we shall find something new.",
    "In general, the art of government consists in taking as much money as possible from one party of the citizens to give to the other.",
    "Reading nurtures the soul, and an enlightened friend brings it solace.",
    "Being unable to make people more reasonable, I preferred to be happy away from them",
    "Four thousand volumes of metaphysics will not teach us what the soul is.",
    "I have chosen to be happy because it is good for my health.",
    "If there’s life on other planets, then the earth is the Universe’s insane asylum.",
    "Fools admire everything in an author of reputation.",
    "Love is a canvas furnished by Nature and embroidered by imagination.",
    "I know many books which have bored their readers, but I know of none which has done real evil.",
    "It is not more surprising to be born twice than once; everything in nature is resurrection.",
    "Men use thought only as authority for their injustice, and employ speech only to conceal their thoughts.",
    "Beware of the words \"internal security,\" for they are the eternal cry of the oppressor.",
    "To the living we owe respect, but to the dead we owe only the truth.",
    "Discord is the great ill of mankind; and tolerance is the only remedy for it.",
    "We all look for happiness, but without knowing where to find it: like drunkards who look for their house, knowing dimly that they have one",
    "I hold firmly to my original views. After all I am a philosopher.",
    "One always begins with the simple, then comes the complex, and by superior enlightenment one often reverts in the end to the simple. Such is the course of human intelligence.",
    "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    "But for what purpose was the earth formed?\" asked Candide. \"To drive us mad,\" replied Martin",
    "It is clear that the individual who persecutes a man, his brother, because he is not of the same opinion, is a monster.",
    "“What a pessimist you are!\" exclaimed Candide.\r\n\"That is because I know what life is,\" said Martin.”",
    "This agglomeration which was called and which still calls itself the Holy Roman Empire was neither holy, nor Roman, nor an empire.",
    "Whatever you do, crush the infamous thing, and love those who love you.",
    "Of all religions, the Christian should of course inspire the most tolerance, but until now Christians have been the most intolerant of all men.",
    "He wanted to know how they prayed to God in El Dorado. \"We do not pray to him at all,\" said the reverend sage. \"We have nothing to ask of him. He has given us all we want, and we give him thanks continually.",
    "If this is the best of possible worlds, what then are the others?",
    "Animals have these advantages over man: they never hear the clock strike, they die without any idea of death, they have no theologians to instruct them, their last moments are not disturbed by unwelcome and unpleasant ceremonies, their funerals cost them nothing, and no one starts lawsuits over their wills.",
    "Perfect is the enemy of good.",
    "The longer we dwell on our misfortunes, the greater is their power to harm us",
    "It is with books as with men: a very small number play a great part.",
    "Liberty of thought is the life of the soul.",
    "The only way to comprehend what mathematicians mean by Infinity is to contemplate the extent of human stupidity.",
    "Our labour preserves us from three great evils -- weariness, vice, and want.",
    "One day everything will be well, that is our hope. Everything's fine today, that is our illusion",
    "He must be very ignorant for he answers every question he is asked.",
    "The happiest of all lives is a busy solitude.",
    "Men are equal; it is not birth but virtue that makes the difference.",
    "History never repeats itself. Man always does.",
    "It is an infantile superstition of the human spirit that virginity would be thought a virtue and not the barrier that separates ignorance from knowledge.",
    "Do you believe,' said Candide, 'that men have always massacred each other as they do to-day, that they have always been liars, cheats, traitors, ingrates, brigands, idiots, thieves, scoundrels, gluttons, drunkards, misers, envious, ambitious, bloody-minded, calumniators, debauchees, fanatics, hypocrites, and fools?'\r\nDo you believe,' said Martin, 'that hawks have always eaten pigeons when they have found them?",
    "May God defend me from my friends: I can defend myself from my enemies.",
    "I loved him as we always love for the first time; with idolatry and wild passion.",
    "She blushed and so did he. She greeted him in a faltering voice, and he spoke to her without knowing what he was saying.",
    "Behind every successful man stands a surprised mother-in-law.",
    "One great use of words is to hide our thoughts.",
    "To hold a pen is to be at war.",
    "What can you say to a man who tells you he prefers obeying God rather than men, and that as a result he's certain he'll go to heaven if he cuts your throat?",
    "It is hard to free fools from the chains they revere.",
    "When a man is in love, jealous, and just whipped by the Inquisition, he is no longer himself.",
    "Each player must accept the cards life deals him or her; but once they are in hand, he or she alone must decide how to play the cards in order to win the game.",
    "In every province, the chief occupations, in order of importance, are lovemaking, malicious gossip, and talking nonsense.",
    "Doctors put drugs of which they know little into bodies of which they know less for diseases of which they know nothing at all",
    "Come! you presence will either give me life or kill me with pleasure.",
    "The more a man knows, the less he talks."
]

// Getting HTML elements
const quoteContainer = document.getElementById('quote-container')
const newQuoteBtn = document.querySelector('.new-quote')
const tweetBtn = document.getElementById('twitter')
const quote = document.getElementById('quote')
const author = document.getElementById('author')

// Event listeners on our buttons
newQuoteBtn.addEventListener('click', displayQuote)
tweetBtn.addEventListener('click', tweetQuote)

// Helper function to pick a random quote
function randomQuoteGenerator() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function displayQuote() {
    // Generate random quote
    const randomQuote = randomQuoteGenerator()

    // Change styling based on the quote's length
    randomQuote.length > 100 ? quote.classList.add('long-quote') : quote.classList.remove('long-quote')

    // Display quote and author to the DOM
    quote.textContent = randomQuote
    author.textContent = 'Voltaire'
}


// Enabling the user to tweet the current tweet
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`

    // Allows us to open the URL in a new window
    window.open(twitterUrl, '_blank')
}

// Loading the initial quote
displayQuote()
