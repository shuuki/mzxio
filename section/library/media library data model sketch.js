
// Most values are optional so you can focus on what is relevant to you.

Collection = 
{
  title       : "",      // string to identify collection
  description : "",      // longer string or content blob
  media       : [
		{
      ref     : "",      // unique value, probably a URL to image
      index   : "",      // identifier for custom sorting
      title   : "",      // short identification media item
      caption : "",      // escaped string or whatever content
      content : "",      // displays value, overrides ref for rendering
      snippet : "",      // for rendering if you need a short preview
      time    : "",      // timestamp string in whatever convention
      tags    : ["", ""] // keywords for individual items
		}
  ],
  author      : "",       // you or whoever for attribution
  time        : "",       // date for the collection
  tags        : ["", ""], // for sorting many collections
  category    : "",       // overall descriptor, should only be one
  cover       : "",       // probably a url to an image
  style       : ""        // for overriding rendering layout
}


// so a collection can be very minimal
{
  title: "Fabulous",
  media: [
    { ref: "abc" },
    { ref: "xyz" }
  ]
}


// book format
{
  title: "Fabulous: A Novel",
  author: "Unicorns",
  time: "1991",
  media: [
    { title: "Chapter One", content: "Once upon a time..." },
    { title: "Chapter Two", content: "When the raccoon awakened..." }
  ]
}


// photo gallery
{
  title: "Fabulous 25th Anniversary Special Edition Release Afterparty",
  time: "2016",
  media: [
    {
      ref: "images/IMG_ABC.jpg",
      caption: "Cool drinks!",
      tags: ["booze", "unicorns"]
    },
    {
      ref: "images/IMG_XYZ.jpg",
      caption: "What is even happening right now?",
      tags: ["unicorns", "cheese"]
    }
  ]
}






Collection = 
{
  title       : "",
  description : "",
  media       : [
		{
      ref     : "",
      index   : "",
      title   : "",
      caption : "",
      content : "",
      snippet : "",
      time    : "",
      tags    : ["", ""]
		}
  ],
  author      : "",
  time        : "",
  tags        : ["", ""],
  category    : "",
  cover       : "",
  style       : ""
}
