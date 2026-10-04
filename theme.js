// Ortak Tema ve Ayar Uygulayıcı (Sayfa yüklenirken çalışır)
(function applyUserTheme() {
  try {
    // PocketBase SDK önbelleğinde oturum açmış kullanıcının verisi varsa
    const rawAuth = localStorage.getItem('pocketbase_auth');
    if (rawAuth) {
      const authData = JSON.parse(rawAuth);
      const userTheme = authData?.model?.theme || 'dark';
      document.documentElement.setAttribute('data-theme', userTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();