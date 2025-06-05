import ProjectBlock from "@/components/project-page/project-block";
import ProjectHeader from "@/components/project-page/project-header";

const RepeatReceipts: React.FC = () => {
  return (
    <div className="flex flex-col items-between justify-center  gap-12">
      <ProjectHeader
        title="Repeat Receipts"
        subtitle="Ever wonder what songs you keep coming back to year after year? With Repeat Receipts, wonder no more."
        imgUrl="images/repeat-receipts/hero.png"
        buttons={[
          { text: "Try it Out! (loads very slow)", link: "https://repeatreceipts.onrender.com/", color: "purple" },
          { text: "GitHub Repo", link: "https://github.com/bbrown430/repeatreceipts", color: "purple" },
        ]}
      />
      <div className="flex flex-col gap-4">
        <ProjectBlock
          title="The Problem"
          paragraphText="Each year I look forward to my Spotify Wrapped playlist, to see what songs I kept in heavy rotation that year. This got me thinking, what songs have I had in my Wrapped playlists for multiple years?"
        />
        <ProjectBlock
          title="The Solution"
          paragraphText="A Python Flask program that uses the Spotify API to determine which songs repeat in multiple Wrapped playlists. From this data, the program will neatly display the ranked songs, generate a playlist, a shareable image, and display additional stats."
        />
        <ProjectBlock
          title="Proof of Concept"
          paragraphText="Starting out, all I knew was Spotify had a well supported API, and Python had a Spotify API library, spotipy. That was enough for me to get started. At the most basic level, I sought to gather the data from each Spotify Wrapped playlist, compare the playlists against one another, and return whenever there was a match. So that is exactly what I did, just with a little more nuance. Once the data processing was complete, the program would display an ordered list of the repeating song's artist and title to the terminal."
          timelineImage="images\repeat-receipts\proof-of-concept.png"
          altText="flowchart of algorithm"
        />
        <ProjectBlock
          title="Flask Web App"
          paragraphText={`If I wanted anyone to use this besides myself, I was going to need to turn this into a webapp, rather than a Python script. The most painless course of action seemed to be turning this into a Flask web app that I could host on a server somewhere. Thus began my journey of learning Flask. Luckily, most of the initial script could be utilized with minimal changes.\nThe first hurdle was implementing OAuth. Luckily, the spotipy library had OAuth functionality accounted for, simplifying the process. I created a login page that would initiate the OAuth flow. Upon a successful authentication, the user would be brought to a very barebones HTML page displaying the same output that I had been displaying in the terminal. While it was certainly functional, it was ugly, and feature barren. Still, it was a step in the right direction, and a solid foundation to improve upon.`}
        />
        <ProjectBlock
          title="Beautifying"
          paragraphText="To make the website more attractive, I implemented Bootstrap and some additional CSS styling. The main addition was displaying the data in a table, rather than a block of strings. This allowed me to display all the relevant fields in an organized fashion, such as album art, title, artist, rank, avg rank, occurrences, and years. I also added a header, stylized the login page, and implemented a Spotify-esque green and grey color palette."
          imageLink="images\repeat-receipts\beautifying.png"
          altText="screenshot of finished UI"
        />
        <ProjectBlock
          title="Additional Statistics"
          paragraphText={`Along with a table of the data, I wanted to add some additional fun statistics. These statistics were:\n
            - **Favorite artist:** whichever artist showed up the most unique times
            - **Most dominant year:** whichever year had the most songs associated with it
            - **Same ranking across different years: ** any songs that were ranked in the same position across multiple years
            - **Biggest gap: ** songs with the biggest gaps between multiple wrapped playlist appearances
            `}
        />
        <ProjectBlock
          title="Playlist Generation"
          paragraphText={`One of the main features I envisioned when scoping this project was the ability to create a playlist from the list of repeating songs (a.k.a. Repeat Beats). This was an easy task, as all of the data needed was already there. All I needed to do was pass a list of Spotify track IDs to the user_playlist_create endpoint, along with a title and description. Then all I had to do was add a button to the page, and playlist generation was ready to go!`}
        />
        <ProjectBlock
          title="Image Generation"
          paragraphText="One of the main draws of Spotify Wrapped, or really any Spotify API project is the shareability of it, specifically your top 5 songs and artists of the year. While I didn’t develop this with virality in mind, I wanted something to share that was prettier than a screenshot of the webpage. I drafted a design up in Figma, and once I was satisfied with it, I used the Pillow library to render the image based on the user’s top 5 data. Then I added a button to the page, and image generation was ready to go!"
          imageLink="images\repeat-receipts\image-generation.png"
          altText="cli screenshot of list mode"
        />
        <ProjectBlock
          title="Hosting"
          paragraphText={`To host this project, I utilized Render. Through Render, I was able to automatically update the hosted instance whenever I pushed to my GitHub repo, and it also allowed me to set the environmental variables privately. The free tier spins down whenever it hasn't been accessed for a while (which is why you might have to wait a minute when trying to access the URL), but it met my needs for this project, and gave me experience with hosting code remotely.`}
        />
        <ProjectBlock
          title="User Testing"
          paragraphText={`I shared the website with my close friends in order to get some user testing before sharing anywhere else online. As expected, this shined some light on bugs, along with user experience shortcomings.`}
        />
        <ProjectBlock
          title="Generate Playlist Button Feedback"
          paragraphText={`With the initial implementation of the “Generate Playlist” button, there was no feedback given once clicked. Due to that, some users would click the button over and over again, unsure if their input had been registered. This would result in multiple playlists being generated, flooding their library. To solve this, I added 2 additional button states, one for while the playlist was generating, and one for after it was generated, allowing the user to open the playlist in a new tab. I also altered the button to only acknowledge the function call if the playlist had not been generated yet.`}
          subheading
          imageLink="images\repeat-receipts\generate-playlist-button-feedback.png"
          altText="button state example"
        />
        <ProjectBlock
          title="Prompting to Follow Wrapped Playlists"
          paragraphText={`While I make a point of following all of my wrapped playlists, it became clear not everyone does. This is important, because if a user is not following their wrapped playlists, they will not be scrapable, as the API only finds playlists within the user’s library. To account for this, I added links to follow user's wrapped playlists from past years. These links would only show when a specific year was not found. Unfortunately, the API does not provide the age of a user’s account, so I cannot reliably provide links to only the years the user’s account was active on Spotify.`}
          subheading
          imageLink="images\repeat-receipts\follow-playlists.png"
          altText="button state example"
        />
        <ProjectBlock
          title="Platform Agnostic Image Sharing"
          paragraphText={`Originally, I had the “Share” button utilize the Web Share API, as this worked wonderfully on iOS and other mobile platforms. However, on desktop, the Web Share API is less supported, and in some cases fully unsupported. Due to this, I changed the functionality so that on a desktop device, the “Share” button will simply download the sharable image instead.`}
          subheading
        />
        <ProjectBlock
          title="Reflection"
          paragraphText={`As the first personal coding project I worked on, I learned a tremendous amount. Taking this from a simple Python script to a web app was a larger undertaking than I anticipated, but I’m still very pleased with how it turned out. Upon finishing this project, I shared it online and had 500+ unique users in the first few days. While it wasn’t a viral sensation, it was still super cool to see other people using and appreciating something that I had spent so much time on.\nIf I was to do this all again, there are certainly things I would do differently. For starters, I would rewrite everything in JavaScript and React, rather than Python and Flask. As a whole, the quality of code is a little below my standards these days, and there are functions that could be made more efficient. I would also refactor the code to be object oriented, rather than the script-y DNA that it still relies on. I would also like to make the user interface a little more interesting than a Bootstrap table and make it more interactive as well.`}
        />
      </div>
    </div>
  );
};

export default RepeatReceipts;
