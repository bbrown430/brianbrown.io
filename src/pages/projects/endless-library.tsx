import ProjectBlock from "@/components/project-page/project-block";
import ProjectHeader from "@/components/project-page/project-header";

const EndlessLibrary: React.FC = () => {
  return (
    <div className="flex flex-col items-between justify-center  gap-12">
      <ProjectHeader
        title="Endless Library"
        subtitle="A tool to download more books than you'll ever read."
        imgUrl="images/endless-library/hero.png"
        buttonText="GitHub Repo"
        buttonColor="orange"
        buttonLink="https://github.com/bbrown430/endless-library"
      />
      <div className="flex flex-col gap-4">
        <ProjectBlock
          title="The Problem"
          paragraphText="Downloading e-books can be a confusing, time-consuming process, if you don’t know what you’re doing. Uploading the e-books to a Kindle is just another step getting in the way of reading."
        />
        <ProjectBlock
          title="The Solution"
          paragraphText="A tool to easily download and send books to a Kindle, featuring a search menu, Goodreads list imports, and an intuitive CLI menu."
        />
        <ProjectBlock
          title="Anna's Archive Scraper"
          paragraphText="When searching for the best aggregator of e-books, I stumbled upon [Anna’s Archive](https://annas-archive.org/). Unfortunately, they do not have an API. Fortunately, their website is very easy to scrape using Python and Beautiful Soup. The scraping process begins by formatting a URL to include the search term, along with the search filters (English, .epub, hosted on libgen). The book entries that are returned from that webpage are then scraped for the title, author, metadata, and MD5. The MD5 is how books are addressed on the libgen servers, so appending it to the proper base URL yields the relevant download link for the book, without the need for additional scraping. From there, the list of entries will be filtered, returning only entries that are relevant to the user."
        />
        <ProjectBlock
          title="Goodreads Scraper"
          paragraphText="[Goodreads](https://www.goodreads.com/) is the most popular book based social network. One of the main features of Goodreads is the ability to make and view lists of books. I sought out to scrape these lists, and then pass them into the Anna’s Archive scraper, allowing for a more efficient, automated experience. Unfortunately, Goodreads does not have an API either. Fortunately, it is also very easy to scrape. Goodreads has three main types of lists: [personal lists](https://www.goodreads.com/review/list/86856541-brian-brown?shelf=to-read) (want to read, read), [Listopia lists](https://www.goodreads.com/list/show/264.Books_That_Everyone_Should_Read_At_Least_Once) (aggregated lists voted on by the community), and [series](https://www.goodreads.com/series/73758-the-hunger-games) lists. While the formatting differs slightly, they all have a similar structure, and house the same metadata in their entries. When a user inputs the URL to one of these lists, the program determines which type of list it is, and scrapes accordingly. Each entry in the list is scraped for the title and author, and are then passed as the search terms to the Anna's Archive scraper."
        />
        <ProjectBlock
          title="Kindle Intergration"
          paragraphText="Each Kindle, whether it's an actual Kindle device or an app instance on a different device, is assigned a Kindle e-mail address. If you send an e-mail to that address with an e-book file as an attachment, it will automatically load that e-book onto the Kindle. Utilizing built in Python libraries, it is very easy to send an e-mail. As a Gmail user, I opted for the simplest implementation, which is using the Gmail SMTP server. To authenticate this process, I generated a 2FA app password, allowing the program to securely send an email from my Gmail account."
        />
        <ProjectBlock
          title="CLI Menu"
          paragraphText="To allow the user to interact with the program, I opted for a CLI menu interface. While it's not the most elegant solution, it gets the job done. Upon launching, the user is prompted with either: [1] Search Mode, or [2] List Mode."
        />
        <ProjectBlock
          title="Search Mode (a.k.a. Interactive Search)"
          paragraphText={`Search mode acts as you would probably expect: enter the search term, and select an entry from the returned list of results. The returned list will display (up to) the first ten scraped results, and includes the title, author, and file size of each entry. The user then selects the number of their desired entry, or can enter ‘back’ to try rewording their search term, or ‘exit’ to close the program entirely. Once an entry is selected, the program will scrape the libgen link of the MD5 from that particular entry, and download the book to the ‘downloads’ directory. If ‘kindle’ mode is enabled, the downloaded book will then be sent to the user’s kindle. If the download fails for any reason, the list of returned entries will display again, and prompt the user to try a different entry.`}
          imageLink="images\endless-library\search-mode.png"
          altText="cli screenshot of search mode"
          subheading
        />
        <ProjectBlock
          title="List Mode (a.k.a. Automated Search)"
          paragraphText="List mode prompts the user to enter the URL of a Goodreads list. After validating the URL input, the program will ask the user how many books from the list they would like to download (some lists will include hundreds of thousands of books, so it’s necessary to define the scope before scraping). From there, sit back and relax as the program iterates through every book in the list (within the defined scope). If a particular entry for a book fails to download, it will simply retry with the next entry. Upon completion of a list, the program will provide a list of failed downloads (if there are any)."
          imageLink="images\endless-library\list-mode.png"
          altText="cli screenshot of list mode"
          subheading
        />
        <ProjectBlock
          title="Reflection"
          paragraphText={`Most of the projects I work on are prompted from thinking “there has to be a better way”, and this one was no exception. I sought out to design an easier way to get books onto my Kindle and did exactly that. While I’ll ever need to load the thousands of books on the “Books That Everyone Should Read At Least Once” list onto my Kindle, it’s nice to know that I could, with very minimal effort.\nFrom a skills standpoint, working on this project taught me the ins and outs of web scraping. It also allowed me to continue refining my Python and coding skills as a whole. In the future, I’d like to implement additional sources as a redundancy, if all downloads fail from a particular source. Furthermore, I’d like to set up an automated service to regularly scrape my Goodreads “want to read” list, and send those books to my Kindle, without me having to even think about it. Overall, I’m super pleased with how this turned out, and I will definitely continue to use this whenever I’m in need of some books!`}
        />
      </div>
    </div>
  );
};

export default EndlessLibrary;
