import BlogPost from './BlogPost';

interface BlogListProps {
  searchQuery: string;
}

const blogs = [
  {
    id: 1,
    title: 'Rockstar',
    date: 'March 15, 2024',
    excerpt: 'If I could step into the world of any film, it would be Rockstar. This movie, directed by Imtiaz Ali, is a rich story of love, ambition, and self-discovery that resonates deeply with anyone who has ever felt lost or heartbroken.',
    fullContent: `If I could step into the world of any film, it would be Rockstar. This movie, directed by Imtiaz Ali, is a rich story of love, ambition, and self-discovery that resonates deeply with anyone who has ever felt lost or heartbroken.

At the centre of the story is Janardhan Jakhar, or JJ, played by Ranbir Kapoor. He starts off as a young man with little ambition and a vague sense of direction in life. His journey takes a significant turn when he meets **Heer**, portrayed by Nargis. Heer seems to be the perfect match for JJ—she's vibrant, intelligent, and full of life. But fate had other plans—she was already in love with someone else. This heartbreak becomes the turning point for JJ, pushing him to reinvent himself as Jordan, the rockstar he was destined to become.

What I find particularly compelling about Rockstar is how it explores into the complexities of love and family. JJ's background is marked by a lack of emotional support; he has never truly experienced the warmth of familial love. This absence fuels his longing for connection and drives him to pour his heart into music. As he navigates the highs and lows of his career, we see how his passion for music becomes both an escape and a means of expression for his pain.

The film beautifully captures the bittersweet nature of love. When JJ and Heer reconnect later in the story, it feels like a second chance—a moment filled with hope and possibility. Yet, life has its own plans, and their reunion is tainted by tragedy. The universe seems to conspire against them, reminding us that sometimes love is not enough to overcome fate's cruel twists.

One of the most heartbreaking moments comes when Heer dies in Jordan's arms. It's a powerful scene that underscores the idea that while love may endure beyond physical presence, loss leaves an indelible mark on our souls. In his grief, Jordan turns to music once more, seeking solace in the very thing that once brought him joy.

The film closes with a quote from Rumi: "Out beyond ideas of wrongdoing and right-doing, there is a field. I'll meet you there." This line encapsulates the essence of Rockstar—the idea that true connection transcends societal norms and personal failures. It invites us to reflect on our own relationships and the complexities that come with them.

In many ways, Rockstar is more than just a film; it's an exploration of what it means to be human—filled with dreams, heartaches, and the relentless pursuit of passion. The music by A.R. Rahman elevates this narrative even further, with songs like "Sadda Haq" capturing the raw energy of Jordan's journey.

Ultimately, Rockstar resonates because it speaks to our shared experiences of love and loss. It reminds us that while life can be incredibly challenging, art—whether through music or storytelling—has the power to heal and connect us all. If I could live in any movie world, it would be this one—a place where every note sung carries a piece of our humanity.`,
    image: 'https://images.indianexpress.com/2021/11/nargis-fakhri.jpeg',
  },
  {
    id: 2,
    title: 'The Cost of Convenience',
    date: 'February 14, 2023',
    excerpt: 'Probably something I wanted to write about since I came to college and maybe one of the most hotly debated topics. You see evolution has given us the gift of communication...',

    fullContent: `Probably something I wanted to write about since I came to college and maybe one of the most hotly debated topics. You see evolution has given us the gift of communication. One doesn't enter a relationship, whether it's friendship or love, with just this. But a broader scaled “effective exchange of ideas and emotions”. 

Freud argued that people's other desires in love were due to a desire for gratification and gratification was only available through a successful loving relationship. Though he also saw mature love as a combination of — self-love and the love of another, and mutual care and respect for one another.

Today, people are more inclined towards "convenience”. Factors such as "distraction," "filling the void," and "emotional support" have exponentially increased, resulting in a more vulnerable individual. Morals and ethics are maybe the past generation's way of saying the same. If there exists a solution is possibly to start believing in oneself. The initial steps must include forgiving yourself and understanding that people grow and change and as we do it means that sometimes we don't feel compatible with people anymore and that's okay. Sometimes leaving relationships in the past is better than trying to force it to be something it's not.

ओ कहने वाले मुझको फरेबी <br/>
कौन फरेबी है ये बता <br/>
ओ जिसने गम लिया प्यार की खातिर <br/>
या जिस ने प्यार को बेच दिया ?

`,
    image: 'https://i.ibb.co/D8RSgwY/344367776-206219785516959-5312013583059637119-n.jpg',
  },
  {
    id: 3,
    title: 'Back to Where It Began',
    date: 'June 5, 2023',
    excerpt: 'So, I guess this is how it is… Returning home feels overwhelming. You have so much to catch up on. All those new buildings that seemed to pop up overnight over familiar streets.',
    fullContent: `So, I guess this is how it is… Returning home feels overwhelming. You have so much to catch up on. All those new buildings that seemed to pop up overnight over familiar streets. The roads that were once under construction have become expressways, humming with the energy of life moving at a faster pace.

New faces have taken the place of the ones I used to know. The apartment I once called home now has different neighbors, and the Reebok shop I frequented has been replaced by a Nike store. It’s a reminder that it’s not just us who grow and change with each passing day; our streets, shops, and cities evolve alongside us. Life is so dynamic that by the time we reach one destination, it feels like we’re already on our way to the next.

Yet, amidst all this change, I feel happy to remind myself that there are still things worth holding onto. That old streetlight I cracked open during a summer adventure? It’s still standing there, unfixed and a little worse for wear. It’s a small piece of my past that remains unchanged.

And then there’s my local shop, still run by that sweet old man with the big moustache. He’s still there, greeting customers with the same warmth and familiarity that made his shop feel like home. In a world where everything seems to shift beneath our feet, it’s comforting to find these constants—little reminders of what once was and what still is.

Finally here I am, finding my way through this mix of old memories and new sights. It’s a strange feeling, really—this mix of excitement for what’s new and a longing for what remains familiar. Life keeps moving forward, but in between all those changes, there are still anchors that keep us grounded. And as I take it all in, I realize that while everything around me may be evolving, some things will always hold a special place in my heart.`,
    image: 'https://images.unsplash.com/photo-1491838592561-ab572ec2d2cb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'The Darjeeling Limited',
    date: 'July 12, 2024',
    excerpt: 'From Wikipedia: A businessman in India fails to catch his train — called “The Darjeeling Limited” — as it pulls out of a station; he is beaten to it by a younger man, Peter Whitman.',
    fullContent: `From Wikipedia: A businessman in India fails to catch his train — called “The Darjeeling Limited” — as it pulls out of a station; he is beaten to it by a younger man, Peter Whitman. Peter reunites with brothers Francis and Jack on board, the three having not seen each other since their father’s funeral a year prior.

Francis has recently survived a near-fatal motorcycle accident (leaving his face and head covered in bandages), and thus wishes to reconnect with his brothers on a journey of spiritual self-discovery. With the help of his assistant, Brendan, Francis draws up a strict itinerary for the trip and takes his brothers’ passports to prevent them from getting off the train too early.

It’s hard to put together a summary without saying too much because a lot of the story unfolds as the movie progresses. Watching the movie feels like hanging out with a group of close friends and being confused at first by names you don’t know and inside jokes you weren’t a part of, but as time goes on, the background is filled in. Even though I enjoyed The Darjeeling Limited, I wouldn’t recommend it unless you’re an avid Wes Anderson fan. The story is interesting, but nothing particularly special as I didn’t feel particularly attached to any characters, but the set design and style is amazing as always. I finished it because I was curious, but the satisfaction from this movie is like having an alright, but small meal — I still have room for more and dessert. It’s one of those movies that needs a different perspective. While you can relate to some parts, it still feels unique and different from what you’d expect.`,
    image: 'https://www.slashfilm.com/img/gallery/darjeeling-limited-defense/anderson-understands-brothers-import.jpg',
  },
  {
    id: 5,
    title: 'Endnotes',
    date: 'Oct 11, 2024',
    excerpt: 'So, the idea for this is a J; why not put in Marshall? I do not know, too bland there. Anyways, reflecting back on whatever time I had at college...',
    fullContent: `So, the idea for this is a J; why not put in Marshall? I do not know, too bland there. Anyways, reflecting back on whatever time I had at college (it was pretty crazy), the person who entered this college never thought to be the one leaving next year. I will try to broadly describe things you could look forward to here, in a decreasing order of priorities and give my take at those.
Thapar is full of people with unique backgrounds, ideas, and personalities. It’s key to find your crowd here (Stuff). Don’t limit yourself to any one group because you think you have to stick around with them—explore, connect with different people, and eventually, you’ll find those who match your vibe. One of the biggest things I’ve realised is how important it is to build relationships here. You don’t have to be overly social if that’s not your thing, but finding even a few people you can relate to can make all the difference. There’s a saying that you’re the average of the five people you hang out with the most, and that couldn’t be truer.

Academics matter, not just for grades, but because they help give structure and direction to your college life. Keeping a good academic record certainly has its perks, whether you’re considering placements, further studies, or just self-development. I feel lucky with the courses I’ve taken so far—they’ve taught me skills I know will be useful beyond college (though my grades don’t say so). My advice? Give your chosen department a fair shot before you decide it’s not for you. The more niche interests can sometimes offer unique opportunities if you dig a little deeper.

A lot of people here get involved in the clubs, societies, or other positions of responsibility (PoRs). Some experiences are absolutely worth it—especially the ones where you get to meet like-minded people or work on something meaningful. For me, being part of TEDx has been one of those experiences, allowing me to connect with amazing people and push my creative boundaries. But here’s the thing—don’t just go for titles. A PoR isn’t going to be a magic ticket to success. They’re beneficial if you’re genuinely interested in what you’re doing, not if you’re just ticking boxes for your resume.

Explore as much as you can here, I cannot publicly establish how much freedom you have here, try to exploit some, try to own some. From my first year until now, I’ve taken part in some insane projects, had countless late-night talks, and seen some of the best (and weirdest) aspects of campus life. Getting involved in all sorts of activities has taught me so much outside of my coursework. College is a once-in-a-lifetime experience, so make it count in your own way. Try out new things, travel if you can, and don’t be afraid to step out of your comfort zone.

In the end, these years are yours to define.`,
    image: 'https://plus.unsplash.com/premium_photo-1696694227344-16b44e4cb78b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    id: 6,
    title: 'Kabira',
    date: 'Dec 25, 2023',
    excerpt: 'Naina’s presence in Bunny’s life brought immense emotional depth and stability to his adventurous spirit. Naina was a realist, while Bunny was a dreamer who always wanted to fly above the clouds.',
    fullContent: `I feel Yeah Jawani Hai Deewani is more than just a movie. It’s about observing the characters. If we talk about Naina and Bunny we have so much to understand. Their dynamic captures the core of discovering what truly matters in life: the balance between dreams and practicality!

Naina’s presence in Bunny’s life brought immense emotional depth and stability to his adventurous spirit. Naina was a realist, while Bunny was a dreamer who always wanted to fly above the clouds. Perhaps Bunny needed Naina to stop him from soaring too close to the sun. Without her, Bunny might have continued to chase his dreams relentlessly, but there would always be a void in his heart. Naina’s influence had helped him understand the significance of love, relationships, and the feeling of home. Her absence might have left Bunny with a sense of loneliness and a yearning for the meaningful connections he had experienced with her. The thrill of adventure might have lost some of its lustre as he realised that genuine happiness also lay in the warmth of companionship and the love he had found with Naina. Her absence could have led Bunny to question the true essence of his relentless pursuit of wanderlust and whether it was worth sacrificing the love that had profoundly impacted his life.

Naina was Bunny’s light—the one that gave him the warmth he always craved. The hugs from his father that he missed so badly, the sense of belonging he never found in any city he traveled to—Naina became all of that for him. She was his grounding force, his reminder of the comfort that exists in stillness, in being present with someone who truly understands you. Bunny, who spent his entire life trying to escape, found a strange, comforting tether in Naina. With her, he realised that it wasn’t about the number of stamps on his passport or the thrill of the next destination. It was about the shared silence in moments of contentment, the late-night conversations, and the feeling of someone waiting for you at the end of a long journey. In Naina, Bunny found his home—a place where he could be his truest self, without the need to put up walls or run away. Her love became the safe harbor he never knew he needed, making him understand that while the world is vast and full of places to explore, the most beautiful journey is finding someone who feels like home.`,
    image: 'https://i.ytimg.com/vi/0CxePHt0yac/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZ-5722nPFyhWkrosGOyZMWo20ow',
  },

  {
    id: 7,
    title: 'The One With Joey',
    date: 'Aug 5, 2023',
    excerpt: "Even though l've always shipped Ross and Rachel, I couldn't help but enjoy the 'Joey falling for Rachel' arc in FRIENDS.",
    fullContent: `Even though l've always shipped Ross and Rachel, I couldn't help but enjoy the 'Joey falling for Rachel' arc in FRIENDS.<br><br>
The sheer relatability of it is what appeals to me and most others, because most of us at some point have fallen for a someone who considered us a best friend and nothing more.
In a moment, Joey realised that he'd caught serious feelings for Rachel and that it was going to be a struggle for his heart to get over her - which he knew he had to do. He was terrified of what he'd begun to feel for her because to him it felt wrong on so many levels; she was pregnant, she was his best friends' ex, and most importantly, she only saw him as a friend. He knew they could never be together, but he didn't know how to tame his heart to stop wanting that.
It's a struggle to get over anybody, but it's a whole another story when you're trying to get over someone with whom you NEVER stand a chance.<br><br>
Joey did the honourable thing in the long run, but the heartbreak he went through doesn't get talked about enough. In a perfect world, he could really keep Rachel happy by giving her all the love she deserved. But their world was far from perfect, and while Rachel found her Prince Charming, poor Joey with his pure heart was left wondering what could have been, had their lives panned out any differently.`,
    image: 'https://cdn.britannica.com/28/163528-050-2BCA9DC0/cast-Friends-Matt-LeBlanc-Lisa-Kudrow-Courteney.jpg',
  },

  {
    id: 8,
    title: 'Diwali Travels',
    date: 'Oct 22, 2022',
    excerpt: "Diwali this year was particularly special for me as I found myself in Patna during my vacation, ready to celebrate it with a mix of excitement and nostalgia.",
    fullContent: `Diwali this year was particularly special for me as I found myself in Patna during my vacation, ready to celebrate it with a mix of excitement and nostalgia. I woke up early on the morning of October 22nd, around 6 AM, feeling the thrill of independence that comes with traveling alone. After brushing my teeth and waking up Raghav and Om, we hurriedly prepared for our journey. Despite my early start, I found myself lagging behind in organising my things, but soon enough, we locked our doors and made our way to the college's main gate. By 6:45 AM, we hopped into an autorickshaw headed for the bus stand. Om was catching a bus to Jalandhar, while Raghav and I were off to Chandigarh. The bus ride was filled with anticipation, and by 9 AM, we arrived in Chandigarh.

Raghav invited me to his home since I had some time before checking in. He prepared three sandwiches that were surprisingly tasty and hit the spot perfectly. We spent a couple of hours remembering about old times and catching up on life before I continued my journey to Patna. After saying goodbye, I headed to the airport for my flight, which included a layover in Delhi. To my surprise, during this layover, I ran into Akrita—sister of Akansha Di—whom I hadn’t seen in six years! It was such a surprise to catch up with her after all this time. As a sweet memento of our unexpected reunion, she gifted me a beautiful handmade bookmark that I still keep in my diary.

Finally, I boarded the plane again and landed in Patna around 7 PM. This trip was a significant milestone for me; it was the first time I truly felt independent and in control of my journey. At first, it was a little intimidating to navigate everything on my own, but with each step, I grew more confident and excited about what lay ahead. As Diwali celebrations lit up the city around me, I couldn’t help but feel grateful for these moments of connection and adventure that made this festival even more memorable.`,
    image: 'https://en.gaonconnection.com/wp-content/uploads/2024/05/firecrackers.jpg',
  },

  {
    id: 9,
    title: 'One Last Time',
    date: 'Sept 3, 2022',
    excerpt: "Today was one of those days that will stay with me forever, a perfect farewell before starting college.",
    fullContent: `Today was one of those days that will stay with me forever, a perfect farewell before starting college.

It all began around noon when Abhik and Krish showed up at my place on their scooty. I had told my parents that Krish was studying at NIFT Bangalore (even though he was still preparing for the exam), and for a moment, I wasn’t sure how to explain it. So, we came up with a story beforehand about how Krish scored AIR 49 and got into the college. Fortunately, no one asked him anything about it, so that was a relief. Abhik and I had also planned a dress code for the day—formal suits, of course. It was the perfect way to mark the occasion.

We decided to go to a nearby cafe, Cookbook, for some “us” time. As soon as we sat down, Krish pulled out his cig. and started puffing away. I think he went through two cigarettes while we were there. We ordered some chicken drums and tried a malt-based drink that was supposed to look like an alcoholic one but turned out to be just terrible. Later, Arpit joined us around 4 pm, and we ordered Noodles and Chilli Chicken—my favourite dishes. In the meantime, we unexpectedly ran into Rishika, who was Shruti’s friend. I had heard about her before but never actually met her. She was from Nasik and had come to Patna for a while, so it was nice to finally catch up.

After that, we decided to head over to another cafe nearby—Barista. The place is literally one of the most high-end spots in Patna, so we felt pretty fancy. I had a brownie with ice cream, and Abhik had cold coffee, though I’m pretty sure he was just trying to act cool! Arpit was doing his best to be “presentable,” but let’s just say he wasn’t succeeding. Krish, on the other hand, was on his fifth smoke—though Abhik insisted it was his ninth. After eating, we couldn’t resist taking some photos. We clicked group shots and solos, capturing that moment. We all knew this could very well be the last time we’d hang out like this, and though I missed Jay and wished he was there, we made the most of it.

The day was filled with laughter, good food, and some bittersweet moments. It was one of those perfect days, and I know it will be a memory that we all will cherish forever.

**It doesn't matter how long the bond is,<br> It only matters how strong the bond is!**
`,
    image: 'https://images.unsplash.com/photo-1541544973719-dff4d817a5a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    id: 10,
    title: 'Ted & Barney',
    date: 'Nov 3, 2023',
    excerpt: "When I think about the relationship between Barney and Ted in How I Met Your Mother, it feels like one of the most complicated yet genuine friendships",
    fullContent: `When I think about the relationship between Barney and Ted in How I Met Your Mother, it feels like one of the most complicated yet genuine friendships. At first, they seem like total opposites—Ted, the hopeless romantic, and Barney, the smooth-talking womaniser. But over time, I realise how much their friendship defines their individual growth. Ted looks up to Barney, not just for his charm and confidence, but for his unapologetic approach to life. Barney, in his own way, pushes Ted to stop overthinking everything and take risks. Even though they’re so different, it’s clear that they bring out the best and worst in each other, in ways no one else can.

What strikes me the most is how their relationship evolves throughout the series. They challenge each other, sometimes in uncomfortable ways, but always in ways that make them grow. I feel like Ted brings out a side of Barney that no one else sees—this vulnerability that’s hidden behind all the bravado. On the flip side, Barney shows Ted how to embrace the present, to let go of the idealised future he’s always dreaming of. Their friendship isn’t always perfect, and they clash more than once, but there’s always an underlying sense of care and respect between them. That’s what makes their connection so interesting to watch.

By the end of the series, it’s clear that their friendship is messy and imperfect, but it’s real. It’s not always easy, and they don’t always understand each other, but they always come back together. They’ve helped shape each other’s lives in ways they couldn’t have imagined when they first met. It’s a reminder that sometimes the most unlikely friendships can have the most profound impact on us, and that despite all the chaos, there’s something beautiful about how they always manage to find their way back to each other.
`,
    image: 'https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/190397149_10159293049322277_4496039141407012959_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=SSi4jGKmY90Q7kNvgGRCQpM&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=AWxB1WX6oFn1tnIx1-Jcegx&oh=00_AYCRuztUi5eAodk-fgBQ7jwCW0EezoC_tVpbxlDSlUjVpA&oe=675996BC',
  },

];

const BlogList = ({ searchQuery }: BlogListProps) => {
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      {filteredBlogs.map(blog => (
        <BlogPost key={blog.id} {...blog} />
      ))}
    </div>
  );
}

export default BlogList;