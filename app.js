// Modal toggles and dashboard state handlers
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const forgotModal = document.getElementById('forgotModal');
const deviceModal = document.getElementById('deviceModal');
const landingView = document.getElementById('landingView');
const userDashboard = document.getElementById('userDashboard');
const openLoginBtn = document.getElementById('openLoginBtn');
const openRegisterBtn = document.getElementById('openRegisterBtn');

if (openLoginBtn) {
  openLoginBtn.addEventListener('click', () => {
    closeModals();
    loginModal.classList.add('active');
  });
}

if (openRegisterBtn) {
  openRegisterBtn.addEventListener('click', () => {
    closeModals();
    registerModal.classList.add('active');
  });
}

function showRegisterModal() {
  closeModals();
  registerModal.classList.add('active');
}

function showForgotPassword(e) {
  if (e) e.preventDefault();
  closeModals();
  forgotModal.classList.add('active');
}

function openDeviceModal() {
  deviceModal.classList.add('active');
}

function closeModals() {
  if (loginModal) loginModal.classList.remove('active');
  if (registerModal) registerModal.classList.remove('active');
  if (forgotModal) forgotModal.classList.remove('active');
  if (deviceModal) deviceModal.classList.remove('active');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  closeModals();
  landingView.style.display = 'none';
  userDashboard.classList.add('active');
  document.getElementById('userNameDisplay').textContent = email.split('@')[0];
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  closeModals();
  landingView.style.display = 'none';
  userDashboard.classList.add('active');
  document.getElementById('userNameDisplay').textContent = name;
}

function handleForgotPassword(e) {
  e.preventDefault();
  alert('Password reset instructions have been sent to your email.');
  closeModals();
  loginModal.classList.add('active');
}

function logout() {
  userDashboard.classList.remove('active');
  landingView.style.display = 'block';
}

function simulateDeviceConnected() {
  closeModals();
  const tbody = document.getElementById('deviceTableBody');
  if (!tbody) return;
  const tr = document.createElement('tr');
  tr.style.borderBottom = '1px solid var(--border)';
  tr.innerHTML = `
    <td style="padding: 16px 24px;">Messaging Bot #${tbody.children.length + 1}</td>
    <td style="padding: 16px 24px;">+91 95555 ${Math.floor(10000 + Math.random() * 90000)}</td>
    <td style="padding: 16px 24px;"><span style="color: var(--success); font-weight: 600;">● Connected</span></td>
    <td style="padding: 16px 24px;"><button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.85rem;" onclick="removeDevice(this)">Disconnect</button></td>
  `;
  tbody.appendChild(tr);
  document.getElementById('statDevices').textContent = tbody.children.length;
}

function removeDevice(btn) {
  const row = btn.closest('tr');
  row.remove();
  const tbody = document.getElementById('deviceTableBody');
  if (tbody) {
    document.getElementById('statDevices').textContent = tbody.children.length;
  }
}
