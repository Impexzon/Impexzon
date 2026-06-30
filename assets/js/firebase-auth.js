// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0zgzdX-XW3txpGiGX5-CFo0BDY2AuseA",
    authDomain: "impexzon-8d439.firebaseapp.com",
    projectId: "impexzon-8d439",
    storageBucket: "impexzon-8d439.firebasestorage.app",
    messagingSenderId: "720774532012",
    appId: "1:720774532012:web:ab3eb5377c704a18d54809",
    measurementId: "G-7KNECLFC33"
};

// List of emails authorized to see the Admin panel link in the navigation
// Add any Google emails you want to grant admin access to here.
const ADMIN_EMAILS = [
    '',
    '',
    ''
];

// Initialize Firebase compatibility SDK
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Provide Auth references globally for other scripts (e.g. product details page)
window.firebaseAuthInstance = auth;
window.googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Custom Login function
window.loginWithGoogle = function () {
    return auth.signInWithPopup(window.googleAuthProvider)
        .then(result => {
            console.log("Successfully signed in:", result.user);
            return result.user;
        })
        .catch(error => {
            console.error("Sign-in error:", error);
            // Ignore cancel popup errors to avoid annoying alerts
            if (error.code !== 'auth/popup-closed-by-user') {
                alert("Sign-in failed: " + error.message);
            }
        });
};

// Custom Logout function
window.logoutUser = function () {
    return auth.signOut()
        .then(() => {
            console.log("Successfully signed out");
        })
        .catch(error => {
            console.error("Sign-out error:", error);
            alert("Sign-out failed: " + error.message);
        });
};

// Inject Custom Auth Alert Modal dynamically into the document body
function initAuthAlertModal() {
    if (document.getElementById('authAlertModal')) return;

    const modalHtml = `
    <div class="auth-alert-modal-overlay" id="authAlertModal">
        <div class="auth-alert-modal">
            <span class="close-auth-modal" onclick="closeAuthAlertModal()">&times;</span>
            <div class="auth-alert-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
            <h3>Login Required</h3>
            <p class="auth-alert-description">Please sign in with Google to inquire about this product.</p>
            <button onclick="loginWithGoogleAndClose()" class="btn-google-login">
                <svg class="google-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                Sign in with Google
            </button>
        </div>
    </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = modalHtml;
    const modalEl = div.firstElementChild;
    
    // Close modal when clicking outside on the overlay
    modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
            window.closeAuthAlertModal();
        }
    });

    document.body.appendChild(modalEl);
}

// Global modal helpers
window.showAuthAlertModal = function (context) {
    const modal = document.getElementById('authAlertModal');
    if (modal) {
        const descText = modal.querySelector('.auth-alert-description');
        if (descText) {
            if (context === 'checkout') {
                descText.textContent = "Please sign in with Google to complete your checkout and place your order.";
            } else if (context === 'inquiry') {
                descText.textContent = "Please sign in with Google to inquire about this product.";
            } else {
                descText.textContent = "Please sign in with Google to continue.";
            }
        }
        modal.classList.add('show');
    }
};

window.closeAuthAlertModal = function () {
    const modal = document.getElementById('authAlertModal');
    if (modal) {
        modal.classList.remove('show');
    }
};

window.loginWithGoogleAndClose = function () {
    window.loginWithGoogle().then(user => {
        if (user) {
            window.closeAuthAlertModal();
            // Automatically open inquiry modal after successful login for best UX
            setTimeout(() => {
                const inquiryModal = document.getElementById('inquiryModal');
                if (inquiryModal) {
                    inquiryModal.classList.add('show');
                }
            }, 400);
        }
    });
};

// Initialize UI Toggles and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // 1. Core navigation references
    const loginBtn = document.getElementById('loginBtn');
    const userProfile = document.getElementById('userProfile');
    const userAvatar = document.getElementById('userAvatar');
    const dropdownUserName = document.getElementById('dropdownUserName');
    const dropdownUserEmail = document.getElementById('dropdownUserEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    const userDropdown = document.getElementById('userDropdown');

    // 2. Inject the custom auth required modal alert
    initAuthAlertModal();

    // 3. User Avatar dropdown toggle (click-based to support mobile seamlessly)
    if (userAvatar && userDropdown) {
        userAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            userDropdown.classList.remove('show');
        });

        // Prevent clicking inside the dropdown from closing it
        userDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 4. Bind login actions
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.loginWithGoogle();
        });
    }

    // 5. Bind logout actions
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.logoutUser();
            if (userDropdown) {
                userDropdown.classList.remove('show');
            }
        });
    }

    // 6. Listen to auth state transitions
    auth.onAuthStateChanged(user => {
        const drawerUserAvatar = document.getElementById('drawerUserAvatar');
        const drawerUserLetter = document.getElementById('drawerUserLetter');
        const drawerSignInText = document.getElementById('drawerSignInText');

        if (user) {
            // State: LOGGED IN
            if (loginBtn) loginBtn.style.display = 'none';

            // Populate profile info
            if (userAvatar) {
                userAvatar.src = user.photoURL || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
            }
            if (dropdownUserName) dropdownUserName.textContent = user.displayName || 'Guest User';
            if (dropdownUserEmail) dropdownUserEmail.textContent = user.email || '';

            if (userProfile) userProfile.style.display = 'inline-flex';

            // Update drawer elements
            if (drawerSignInText) drawerSignInText.textContent = 'SIGN OUT';
            if (user.photoURL) {
                if (drawerUserAvatar) {
                    drawerUserAvatar.src = user.photoURL;
                    drawerUserAvatar.style.display = 'inline-block';
                }
                if (drawerUserLetter) drawerUserLetter.style.display = 'none';
            } else {
                if (drawerUserLetter) {
                    const letter = (user.displayName || user.email || 'U').charAt(0).toUpperCase();
                    drawerUserLetter.textContent = letter;
                    drawerUserLetter.style.display = 'inline-flex';
                }
                if (drawerUserAvatar) drawerUserAvatar.style.display = 'none';
            }

            // Auto-fill Product Inquiry Form Name/Email fields if present on this page
            const inquireName = document.getElementById('inquireName');
            const inquireEmail = document.getElementById('inquireEmail');
            if (inquireName) {
                inquireName.value = user.displayName || '';
                inquireName.readOnly = true;
            }
            if (inquireEmail) {
                inquireEmail.value = user.email || '';
                inquireEmail.readOnly = true;
            }

            // Check if user is Admin and toggle the admin navigation link visibility
            const adminItems = document.querySelectorAll('.admin-nav-item');
            const isAdmin = ADMIN_EMAILS.includes(user.email);
            adminItems.forEach(item => {
                item.style.display = isAdmin ? '' : 'none';
            });
        } else {
            // State: LOGGED OUT
            if (userProfile) userProfile.style.display = 'none';
            if (loginBtn) loginBtn.style.display = 'inline-flex';

            // Update drawer elements
            if (drawerSignInText) drawerSignInText.textContent = 'SIGN IN';
            if (drawerUserAvatar) drawerUserAvatar.style.display = 'none';
            if (drawerUserLetter) drawerUserLetter.style.display = 'none';

            // Clear and unlock Product Inquiry Form fields
            const inquireName = document.getElementById('inquireName');
            const inquireEmail = document.getElementById('inquireEmail');
            if (inquireName) {
                inquireName.value = '';
                inquireName.readOnly = false;
            }
            if (inquireEmail) {
                inquireEmail.value = '';
                inquireEmail.readOnly = false;
            }

            // Hide admin navigation links
            const adminItems = document.querySelectorAll('.admin-nav-item');
            adminItems.forEach(item => {
                item.style.display = 'none';
            });
        }
    });
});