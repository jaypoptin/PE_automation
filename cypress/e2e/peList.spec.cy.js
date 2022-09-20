describe('List api testing', () => {
it('Get - List details', (done) => {
    cy.request('https://dev5.dev.popt.in/email/api/v1/lists/6322c2474fb18?api_token=d8lq5F3aaSu7eQNS5GiPUHngG6WyLHwsifYfTJoAagdfexqb7VDq1ViZ52sV').as('comments')
    cy.get('@comments').should((response) => {
        expect(response.body.data.list).to.deep.include({
            'uid':'6322c2474fb18',
            'name' : 'Master Audience'
        })
        return done();
    });
})
})