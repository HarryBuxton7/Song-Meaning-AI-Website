"use server";

export async function generateAnalysis(prevState: any, formData: FormData) {
  console.log(formData.get("lyrics"))
  const url = `https://api.openai.com/v1/chat/completions`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Can you break down the meaning of these song lyrics in 150 words: ${formData.get("lyrics")}` }],
      temperature: 0.7
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.choices[0].message.content
  } catch (error) {
    console.error(error);
    return "error"
  }
}
