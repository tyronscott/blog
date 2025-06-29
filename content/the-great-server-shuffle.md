---
title: "the great server shuffle: why i'm rebuilding animochat (why i broke everything, on purpose !!)"
date: "2025-06-29"
categories:
    - "stuff"
---

remember when animochat was just my little answer to the omegle-shaped hole in the internet? good times. turns out, a lot of you wanted to yell into the void with me. like, a lot of you. honestly, mapping all of this out has been a uniquely challenging journey. as the solo developer behind the new infrastructure, every decision, from the load balancer strategy to the database choice, rests squarely on my shoulders. it’s a complex dance of predicting traffic, managing resources, and trying to build a system that won't just work today, but will be ready for a future i can only guess at. there were nights spent staring at diagrams that looked more like a madman's scribbles than a coherent plan. my beloved, trusty backend (supabase) started to sweat under the pressure, and it became clear that a change was needed.

my original setup with supabase was fantastic for getting off the ground. it was the digital equivalent of a super talented bouncer who could manage the door, matchmake couples, and serve drinks all at once. But when the party gets big enough, even the best bouncer needs a team. i was hitting my limits, and the last thing i want is for you to experience lag while you're trying to have a chaotic, anonymous conversation.

so, i went back to the drawing board. it was time for a glow-up.

# from one-man-show to a full-on crew

the old way was simple: you knocked, and my single server (shoutout to supabase) did everything. the new way? it's a bit more like a well-oiled machine from a spy movie.

picture this: instead of one entrance, there is now a massive, revolving door managed by a **load balancer**. this door doesn't just let you in, it intelligently scans for the freest matchmaking server and sends you right there. no more waiting in a single, long queue.

i don't have just one matchmaking server anymore. i have a whole crew of them. and how do they all know who's waiting for a chat? they all share a high-speed, digital clipboard called a **redis cluster**. think of it as the ultimate guest list that everyone can read from and write to in an instant.

once the matchmaking crew finds you a partner, it doesn't just throw you into a room. it notifies both of you instantly using **server-sent events (sse).** basically a high-tech pager that says "your partner is ready." then, it points you to the best available chat server to host your conversation.

these dedicated chat servers do one thing and one thing only: relay your messages back and forth, fast and reliably.

# let's talk about "scaling horizontally" 

so, what does all this tech jargon mean? it means i'm **scaling horizontally** (literally).

imagine you have a single, massive food truck that's getting swamped with customers. you could try to make that one truck bigger and faster (that's vertical scaling), but eventually, you'll hit a physical limit.

or... you could just add more food trucks to the street (*that's horizontal scaling*).

the new architecture is built on that second idea. when the chat servers start getting full, i don't have to panic. i just spin up another one and plug it into the system. boom, more capacity. same goes for the matchmaking servers. if the "lobby" gets too crowded, i just add another matchmaker to the crew.

this makes the app way more resilient. if one chat server has a hiccup, it doesn't take the whole app down. everyone else just continues chatting in their own dedicated servers. it's growth on my terms, ensuring the experience stays smooth for you.

# check out the code

it's all out there for you to see. feel free to poke around the repos:

* **animochat chat server:** [https://github.com/tyron12233/animochat-chat-server](https://github.com/tyron12233/animochat-chat-server)
* **animochat matchmaking server:** [https://github.com/tyron12233/animochat-turn-server](https://github.com/tyron12233/animochat-turn-server)
* **animochat service discovery server:** [https://github.com/tyron12233/animochat-service-discovery](https://github.com/tyron12233/animochat-service-discovery)
* **animochat client:** [https://github.com/tyron12233/animochat-p2p](https://github.com/tyron12233/animochat-p2p)



# so, what's next? (the sequel)

**TO BE CONTINUED !!!**
