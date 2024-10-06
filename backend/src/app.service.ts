import { Injectable } from '@nestjs/common';

import OpenAI from 'openai';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const openai = new OpenAI({ apiKey: '' });
    const arr = [
      "select_true_are",
      "find_item_here",
      "get_info_data",
      "fetch_results_now",
      "load_file_system",
      "store_data_in",
      "update_status_field",
      "delete_entry_from",
      "create_new_user",
      "validate_input_type"
    ]
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: "Translate the following list of actions " +JSON.stringify(arr)+ " into Azerbaijani, English, and Russian. Please provide the translations in JSON format with three keys (az, en, ru), each containing an array of the translated phrases. Don't include the original phrases in the result.",
        },
      ],
    });
    completion.choices.forEach(choice => {
      console.log(choice.message.content)
      console.log("================================================================")
    })

    return completion.choices[0].message.content;
  }
}
