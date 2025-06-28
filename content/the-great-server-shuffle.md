---
title: "the great server shuffle: why i'm rebuilding animochat (why i broke everything, on purpose !!)"
date: "2025-03-27"
categories:
    - "stuff"
---

remember when animochat was just our little answer to the omegle-shaped hole in the internet? good times. turns out, a lot of you wanted to yell into the void with us. like, a lot of you. so many, in fact, that our beloved, trusty backend started to sweat. a lot.

our original setup with supabase was fantastic for getting off the ground. it was the digital equivalent of a super talented bouncer who could manage the door, matchmake couples, and serve drinks all at once. but when the party gets big enough, even the best bouncer needs a team. we were hitting our limits, and the last thing i want is for you to experience lag while you're trying to have a chaotic, anonymous conversation.

so, i went back to the drawing board. it was time for a glow-up.   

# from one-man-show to a full-on crew

the old way was simple: you knocked, and our single server (shoutout to supabase) did everything. the new way? it's a bit more like a well-oiled machine from a spy movie.

picture this: instead of one entrance, we now have a massive, revolving door managed by a **Load Balancer**. this door doesn't just let you in, it intelligently scans for the free-est Matchmaking Server and sends you right there. no more waiting in a single, long queue.

we don't have just one matchmaking server anymore. we have a whole crew of them. and how do they all know who's waiting for a chat? they all share a high-speed, digital clipboard called a **Redis Cluster**. think of it as the ultimate guest list that everyone can read from and write to in an instant.

once the matchmaking crew finds you a partner, it doesn't just throw you into a room. it notifies both of you instantly using **Server-Sent Events (SSE).** Basically a high-tech pager that says "your partner is ready." then, it points you to the best available Chat Server to host your conversation.

these dedicated Chat Servers do one thing and one thing only: relay your messages back and forth, fast and reliably.

# let's talk about "scaling horizontally" 
so, what does all this tech jargon mean? it means we're **scaling horizontally** (literally).

imagine you have a single, massive food truck that's getting swamped with customers. you could try to make that one truck bigger and faster (that's vertical scaling), but eventually, you'll hit a physical limit.

or... you could just add more food trucks to the street (*that's horizontal scaling*).

the new architecture is built on that second idea. when the chat servers start getting full, i don't have to panic. i just spin up another one and plug it into the system. boom, more capacity. same goes for our matchmaking servers. if the "lobby" gets too crowded, i just add another matchmaker to the crew.

this makes app way more resilient. if one chat server has a hiccup, it doesn't take the whole app down. everyone else just continues chatting in their own dedicated servers. it's growth on our terms, ensuring the experience stays smooth for you.

# so, what's next? (the sequel)

**TO BE CONTINUED !!!**
