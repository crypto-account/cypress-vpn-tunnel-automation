describe('Weryfikacja połączenia VPN', () => {
  it('powinien potwierdzić, że ruch wychodzi przez adres IP VPN', () => {
    // 1. Wysyłamy żądanie do API sprawdzającego IP
    cy.request('https://ifconfig.me/ip').then((response) => {
      const currentIp = response.body.trim();
      
      // Logujemy adres w konsoli Cypressa dla pewności
      cy.log(`Mój aktualny adres IP to: ${currentIp}`);

      // 2. Weryfikujemy, czy adres zgadza się z oczekiwanym adresem wyjściowym
      expect(currentIp).to.eq('219.100.37.236');
    });
  });
});