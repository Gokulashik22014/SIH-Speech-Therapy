import ollama from "ollama";

// const s = `What they forget to mention there is the following. When you're reading the book, you can't just read like this. You can't just every day just go, this does not simply mean that there will be no dramatic surprises. It means simply that there must be no surprises which do not as they unfold as that doesn't make sense for the audience. You can't read like that. Reading like that, it's not deliberate practice. Deliberate practice when it comes to communication is you must read as if you're presenting for an audience then you improve. And you must read in a way where you play with all your foundations too. So if you read in a way where you did this, before leaving the subject of the conflicted situation that occurred, I wanted to point out that the performer's conflict needs to involve other people. Again, so using all the emotions and all the foundations, high levels of effort during practice will transfer more of those skills into your everyday life.`;

export const getResponse = async (req, res) => {
  try {
    const { question } = req.body;
    console.log("Got the content processing.....")
    const query = "Summerize the below content in 20 words just give the summarized content not anything else." + question;
    console.log("Please wait still processing the video content....")
    const result = await ollama.chat({
      model: "tinyllama",
      messages: [{ role: "user", content: query }],
    });
    res.json({ success: true, result: result.message.content });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error });
  }
};
