//MessageInput in this case may be null or HTMLElement
const messageInput = document.getElementById('message-input');

//Typeguard - to check if the value exist
//If the value exists, then it will be of type HTMLElement
if (messageInput) {
  messageInput.innerText = 'Alex';
}

//------------------------------------

//Below, we have multiple levels of null | htmlElement types that we need to check
const messageInputElement = document.getElementById('message-input');
//To check if the value exists so it will be of type HTMLElement
if (messageInputElement) {
  const parentElement = messageInputElement.parentElement;
  //To check if the value exists so it will be of type HTMLElement
  if (parentElement) {
    const messageInputParentInnerHTML = parentElement.innerHTML;
    //To check if the value exists so it will be of type string
    if (messageInputParentInnerHTML) {
      console.log(messageInputParentInnerHTML);
    }
  }
}
//To simplify this we can use the optional chaining operator
//This will check if the value exists and if it does, it will return the value
const optionalMessageInputElement =
  document.getElementById('message-input')?.parentElement?.innerHTML;

//------------------------------------

//Optional Chaining on Functions and Arrays

function handleTeacherApiResponse(response: {
  //if array is empty, it will return undefined
  teachers?: string[];
  error?: string;
}) {
  //if array exist and is not empty, it will return the first element
  const teachers = response.teachers?.[0];
}

//------------------------------------

async function makeApiRequest(url: string, log?: (message: string) => void) {
  // log? will check if the value exists and if it does, it will call the function
  log?.('Request started.');
  const response = await fetch(url);
  const data = await response.json();

  log?.('Request completed.');
  return data;
}

//Two ?? operators means that if the first value is null or undefined, then it will return the second value
const message2 = messageInputElement?.innerHTML ?? 'Default message';

// ! - Non-null assertion operator
//This will tell the compiler that the value is not null or undefined
// Only exists in TypeScript
const message3 = messageInputElement!.innerHTML;
