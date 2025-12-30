const formContainer = document.querySelector(".form-container");
const descContainer = document.querySelector(".desc-container");

let signUp = `
            <h2>Sign Up Now!</h2>
            <form>
                <label for="signup-first-name">First Name</label><br>
                <input type="text" id="signup-first-name" required><br><br>
                <label for="signup-last-name">Last Name</label><br>
                <input type="text" id="signup-last-name" required><br><br>
                <label for="signup-date-of-birth">Date of Birth</label><br>
                <input type="date" id="signup-date-of-birth" required><br><br>
                <div class="gender-container">
                    <legend>Gender</legend>
                    <label for="male">
                        <input type="radio" name="gender" value="male" required>
                        Male
                    </label>
                    <label for="female">
                        <input type="radio" name="gender" value="female" required>
                        Female
                    </label>
                    <label for="non-binary">
                        <input type="radio" name="gender" value="non-binary" required>
                        Non-Binary
                    </label>
                </div>
                <br><br>
                <label for="signup-username">Username</label><br>
                <input type="text" id="signup-username" required><br><br>
                <label for="signup-email-address">Email</label><br>
                <input type="email" id="signup-email-address" required><br><br>
                <label for="signup-phone-number">Phone Number</label><br>
                <input type="tel" id="signup-phone-number"><br><br>
                <label for="signup-password">Password</label><br>
                <input type="password" id="signup-password" required><br><br>
                <label for="signup-confirm-password">Confirm Password</label><br>
                <input type="password" id="signup-confirm-password" required><br><br>
                <p class="toggle-link">Already have an account?</p>
                <button type="submit" id="signup-submit-button">Submit</button>
            </form>
`;

let logIn = `
            <h2>Log In</h2>
            <form>
                <label for="login-username">Username</label><br>
                <input type="text" id="login-username" required><br><br>
                <label for="login-password">Password</label><br>
                <input type="password" id="login-password" required><br><br>
                <p class="toggle-link">New User?</p>
                <button type="submit" id="login-submit-button">Submit</button>
            </form>
`;

let signUpMessage = `
            <h1>Welcome To <span>Eyy</span></h1>
            <p>Your Next Gen Smart Social Media app that is in your hands, the ultimate destination 
               for connecting each other, with cool features like Shorts, AI based Camera, Shops, 
               E-payments and More, <span>Eyy</span> provides All-in-one Social Media and Services That's 
               Suits Your Needs </p>
`

let logInMessage = `
            <h1>Welcome Back To <span>Eyy</span></h1>
            <p>Your Next Gen Smart Social Media app that is in your hands, the ultimate destination 
               for connecting each other!</p>
`

document.addEventListener("DOMContentLoaded", () => {
    let isToggled = false;
    
    // Set initial form
    formContainer.innerHTML = signUp;
    descContainer.innerHTML = signUpMessage;
    
    // Use event delegation to handle clicks on toggle elements
    formContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("toggle-link")) {
            isToggled = !isToggled;
            formContainer.innerHTML = isToggled ? logIn : signUp;
            descContainer.innerHTML = isToggled ? logInMessage : signUpMessage;
        }
    });
});