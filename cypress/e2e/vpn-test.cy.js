describe('Weryfikacja połączenia VPN', () => {
  it('powinien pokazać adres IP serwera VPN', () => {
    // Odwiedzamy stronę, która zwraca tylko czysty tekst z adresem IP
    cy.visit('https://ifconfig.me/ip');

    // Pobieramy treść strony (czyli IP) i wypisujemy ją w logach
    cy.get('body').then(($body) => {
      const currentIp = $body.text().trim();
      cy.log('Aktualny adres IP to: ' + currentIp);
      
      expect(currentIp).to.eq('219.100.37.64');
    });
  });
});