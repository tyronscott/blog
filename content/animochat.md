---
title: the time everyone asked for chaos
date: "2025-02-17"
categories:
  - "stuff"
---

let's rewind to late 2024. omegle had just sht down, and the internet
collectively mourned the loss of its favorite digital roulette wheel for an
awkward small talk. meanwhile, i've been seeing countless of entries from the
freedom wall demanding a replacement. people wanted to yell into the void again.
thus, AnimoChat was born.

Motivations, ranked:

1. "omegle died, and we needed drama"
2. "the freedom wall said 'pls'" (we are week to peer pressure)
3. we wanted to see how many people would accidentally send their wifi passwords
   to strangers.

---

# the competition: a graveyard of outdated chat apps

let's talk about the competition—or, as i like to call it, the "digital dinosaur
exhibit" (nyahahaha). apps like _chatkool_, and others in the anonymous chat
space feel like they were built in 2013, frozen in time, and then dusted off for
a 2025 release. they're functional, sure, but they're about as modern as a nokia
3310 in the world of smartphones.

animochat, on the other hand, is a fresh take on the anonymous chat experience.
we've got all the basics you'd expect from a chat app, but with a modern twist.
think of it as the difference between a rotary phone and a smartphone. we're not
just here to help you chat with strangers; we're here to help you chat with
strangers with **_style_** (ey).

**_P.S to the chatkool devs: no hard feelings. but maybe consider adding a reply
feature? just a thought :p_**

---

# the art of matchmaking: a blind date analogy

one of our biggest headaches? matchmaking. picture this: you walk into a room
packed with stranges, each holding a mysterious key. you blindly grab someone's
hand, and **_poof_**, you are both teleported into a private chat room.

behind the scenes, the matchmaking logic is powered by _postgres functions_,
which are basically the digital equivalent of a bouncer at a club who’s really
good at playing matchmaker. these functions swoop in, grab two random users from
the waiting room, and shove them into a chat room faster than you can say
"awkward small talk". every connection is spontaneous, chaotic, and—thanks to
postgres—surprisingly seamless.

here's a dumbed-down version of how the magic happens:

1. check if you're already waiting (hey, you can't skip lines!)
2. check if you're already match: in the event that you get disconnected, we
   dont want you to lose your match!
3. clean up the waiting room: if someone's impatient and left without matching,
   we wanna make sure that we clean up their mess!
4. find a match: this is where the magic happens. we find someone who's waiting
   for a match and pair you up!

here's a snippet of the logic (don't worry, i've left out the secret sauce)

```sql
CREATE OR REPLACE FUNCTION find_match_v2(_user_id text)  
RETURNS TABLE (match_id UUID, matched_user1 text, matched_user2 text, status TEXT, theme JSONB) AS $$  
BEGIN  
  -- Check if you're already waiting or matched  
  IF youre_already_waiting OR youre_already_matched THEN  
    RETURN QUERY SELECT your_info;  
  END IF;  

  -- Clean up the waiting room  
  DELETE FROM waiting_users WHERE theyre_offline;  

  -- Try to find a match  
  IF someone_with_similar_vibes IS FOUND THEN  
    DELETE FROM waiting_users WHERE its_you_or_your_match;  
    INSERT INTO matches (you, your_match, 'active');  
    RETURN QUERY SELECT your_new_match_info;  
  ELSE  
    -- Join the queue  
    INSERT INTO waiting_users (you);  
    RETURN QUERY SELECT your_waiting_info;  
  END IF;  
END;  
$$ LANGUAGE plpgsql;
```

**_PS: if the matchmaking ever feels slow, blame the bouncer. they're probably
on a coffee break._**

---

# data, privacy, and transparency

let's get real for a moment—while AnimoChat is all about those spontaneous,
anonymous conversations, the truth is that every message does travel through our
servers. think of it like this: when you send a letter, it naturally passes
through a post office. sure, someone could peek at the envelope if they really
wanted to, but that's not what happens. we don't snoop on your chats. our
systems are designed to handle your data with care and respect.

the backend architecture we’ve built (powered by supabase) is crafted for
efficiency and scalability, not intrusion. yes, technically, it means that if
someone were determined enough (with the right access), they could read what’s
being said. but rest assured, your conversations are as private as we can make
them. (if you're still worried, just don't send your wifi password to strangers.
it's a good rule of thumb.) or sue me LOL

in short, while your data must pass through our servers (that’s just how the
magic of the internet works—and it’s free, too), we take every measure to ensure
that your conversations remain just that: yours. it’s all part of creating a
reliable, modern chatting experience where your privacy is respected as much as
your freedom to connect.

---

# wrapping up

animochat isnt just another chat app. its our answer to modern omegle ! with a
seamless interface, we've created a digital playground where every match is
unique :D.

so next time you visit and find yourself paired with a stranger, remember:
behind that seemingly random match is a carefully crafted system. happy chatting
! :)
