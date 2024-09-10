'use server'
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export const generateChatResponse = async(chatMessages)=>{

    try{
        const response = await openai.chat.completions.create({
            messages: [
                {role: 'system', content:'You are a helpful assistant. A ChatGPT clone'},
                ...chatMessages
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
            max_tokens: 300
        })
    
        return {message: response.choices[0].message, tokens: response.usage.total_tokens}
    }catch(err){
        console.log(err)
        return null
    }

}