function callAPI() {
    let inputText = document.getElementById("inputText").value;
    const apiUrl = 'https://models.inference.ai.azure.com/chat/completions';
    const apiKey = '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';

    // Show "processing" message
    document.getElementById("outputText").value = "Please wait... Processing your request.";

    // Add instruction to inputText
    inputText += " -----the text above is having a role attribute and a role attributes, give me a one or two liner description for the given role, and in output don't give any other text just two three sentences role description nothe else, just output i want,, also note the main information, the text before ------ is coming from user input, so if that text is not relvant to roles or is something very different like dogs cats, cars, anything other than role attribute or IAM, then in out put say, given input is invalid, or give a relevant information related to roles in IAM/ applicaiton system, this you will give in output if i you feel that text in starting is too irrelevant to topic";

    const payload = {
        messages: [
            { role: "system", content: "" },
            { role: "user", content: inputText }
        ],
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to fetch response');
        return response.json();
    })
    .then(data => {
        document.getElementById("outputText").value = data.choices[0].message.content;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("outputText").value = "Error: Unable to fetch data.";
    });
}
