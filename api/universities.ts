/**
 * List and email format of all supported universities
 */
const universities = [
    {
        id: 'ubs',
        name: 'Université de Bretagne Sud',
        country: 'France',
        format: /^[A-Za-z\-]+\.e\d{7}@etud\.univ-ubs\.fr$/
    }, {
        id: 'rennes1',
        name: 'Université de Rennes 1',
        country: 'France',
        format: /^[A-Za-z\-]+\.[A-Za-z\-]+@etudiant\.univ-rennes1\.fr$/
    }
]

export default universities
