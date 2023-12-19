"use server";

export async function generateAnalysis(formData: FormData) {
  const url = `https://api.openai.com/v1/chat/completions`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say this is a test!' }],
      temperature: 0.7
    })
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
    return "error"
  }
}
