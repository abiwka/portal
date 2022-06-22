let quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "Be the change that you wish to see in the world.",
    "A room without books is like a body without a soul.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "A friend is someone who knows all about you and still loves you.",
    "If you want to achieve greatness stop asking for permission.",

    "Things work out best for those who make the best of how things work out.",

    "To live a creative life, we must lose our fear of being wrong.",

    "If you are not willing to risk the usual you will have to settle for the ordinary.",

    "Trust because you are willing to accept the risk, not because it's safe or certain.",

    "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",

    "All our dreams can come true if we have the courage to pursue them.",

    "Good things come to people who wait, but better things come to those who go out and get them.",

    "If you do what you always did, you will get what you always got.",

    "Success is walking from failure to failure with no loss of enthusiasm.",

    "Just when the caterpillar thought the world was ending, he turned into a butterfly.",

    "Successful entrepreneurs are givers and not takers of positive energy.",

    "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",

    "Opportunities don't happen, you create them.",

    "Try not to become a person of success, but rather try to become a person of value.",

    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",

    "I have not failed. I've just found 10,000 ways that won't work.",

    "If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it.",

    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",

    "No one can make you feel inferior without your consent.",

    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",

    "If you're going through hell keep going.",

    "The ones who are crazy enough to think they can change the world, are the ones who do.",

    "Don't raise your voice, improve your argument.",

    "What seems to us as bitter trials are often blessings in disguise.",

    "The meaning of life is to find your gift. The purpose of life is to give it away.",

    "The distance between insanity and genius is measured only by success.",

    "When you stop chasing the wrong things, you give the right things a chance to catch you.",

    "I believe that the only courage anybody ever needs is the courage to follow your own dreams.",

    "No masterpiece was ever created by a lazy artist.",

    "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",

    "If you can't explain it simply, you don't understand it well enough.",

    "Blessed are those who can give without remembering and take without forgetting.",

    "Do one thing every day that scares you.",

    "What's the point of being alive if you don't at least try to do something remarkable.",

    "Life is not about finding yourself. Life is about creating yourself.",

    "Nothing in the world is more common than unsuccessful people with talent.",

    "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",

    "Your problem isn't the problem. Your reaction is the problem.",

    "You can do anything, but not everything.",

    "Innovation distinguishes between a leader and a follower.",

    "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",

    "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",

    "I find that the harder I work, the more luck I seem to have.",

    "The starting point of all achievement is desire.",

    "Success is the sum of small efforts, repeated day-in and day-out.",

    "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",

    "All progress takes place outside the comfort zone.",

    "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.",

    "Courage is resistance to fear, mastery of fear--not absence of fear.",

    "Only put off until tomorrow what you are willing to die having left undone.",

    "People often say that motivation doesn't last. Well, neither does bathing--that's why we recommend it daily.",

    "We become what we think about most of the time, and that's the strangest secret.",

    "The only place where success comes before work is in the dictionary.",

    "Too many of us are not living our dreams because we are living our fears.",

    "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",

    "It's not what you look at that matters, it's what you see.",

    "The road to success and the road to failure are almost exactly the same.",

    "The function of leadership is to produce more leaders, not more followers.",

    "Success is liking yourself, liking what you do, and liking how you do it.",

    "As we look ahead into the next century, leaders will be those who empower others.",

    "A real entrepreneur is somebody who has no safety net underneath them.",

    "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",

    "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",

    "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",

    "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",

    "The successful warrior is the average man, with laser-like focus.",

    "There is no traffic jam along the extra mile.",

    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",

    "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",

    "If you genuinely want something, don't wait for it--teach yourself to be impatient.",

    "Don't let the fear of losing be greater than the excitement of winning.",

    "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!"
];

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").innerHTML = randomQuote;