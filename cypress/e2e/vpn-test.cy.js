describe('Weryfikacja połączenia VPN', () => {
  it('powinien pokazać adres IP serwera VPN', () => {
    // Używamy request zamiast visit, ponieważ serwer zwraca text/plain
    cy.request('https://ifconfig.me/ip').then((response) => {
      // Pobieramy IP z body odpowiedzi
      const currentIp = response.body.trim();
      
      cy.log('Aktualny adres IP to: ' + currentIp);
      
      // Sprawdzamy, czy IP zgadza się z Twoim serwerem VPN
      expect(currentIp).to.eq('219.100.37.222');

    });
  });
});