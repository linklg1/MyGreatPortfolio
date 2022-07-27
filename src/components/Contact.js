import "./components.css"
import React, { useState } from 'react';



function Contact() {
const [formState, setFormState] = useState({
name: '',
email: '',
message: '',
});

const [errorMessage, setErrorMessage] = useState('');
const { name, email, message } = formState;

const handleSubmit = (e) => {
e.preventDefault();
if (!errorMessage) {
console.log('Submit Form', formState);
window.location.reload();
}
};

const handleChange = (e) => {
if (!e.target.value.length) {
setErrorMessage(`${e.target.name} is required.`);
} else {
setErrorMessage('');
}
if (!errorMessage) {
setFormState({ ...formState, [e.target.name]: e.target.value });
console.log('Handle Form', formState);
}
};

return (
<section>    
<form id="contact-form" onSubmit={handleSubmit}>
<div>
<label htmlFor="name">Name:</label>
<input
type="text"
name="name"
defaultValue={name}
onBlur={handleChange}
/>
</div>
<div>
<label htmlFor="email">Email address:</label>
<input
type="email"
name="email"
defaultValue={email}
onBlur={handleChange}
/>
</div>
<div>
<label htmlFor="message">Message:</label>
<textarea
name="message"
rows="5"
defaultValue={message}
onBlur={handleChange}
/>
</div>
{errorMessage && (
<div>
<p className="error-text">{errorMessage}</p>
</div>
)}
<button type="submit">Submit</button>
</form>

<a href="https://github.com/linklg1"> <img id="github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github icon"/> </a>
<a href="https://www.linkedin.com/in/luma-kawar-b215281b9/"> <img id="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" alt="linkedin icon"/> </a>
<a href="https://open.spotify.com/user/lumaaaa29"> <img id="spotify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1024px-Spotify_icon.svg.png?20191006032433" alt="spotify icon"/> </a>
<a href="https://lumaness.tumblr.com/"> <img id="tumblr" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tumblr.svg" alt="tumblr icon"/> </a>

</section>

);




}





export default Contact; 
