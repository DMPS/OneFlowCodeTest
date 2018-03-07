describe("Episodes", function () {
    const gqltools = require('graphql-tools');
    const gql = require('graphql');
    const schemaString = `type Episode {
        id: Int!
        name: String
        url: String
        season: Int
        number: Int
        airdate: String
        airtime: String
        runtime: Int
        image: Image
    }
    type Image {
        medium: String
        original: String
    }
    
    type Query {
        episodes(season: Int!): [Episode]
    }`;
    const schema = gqltools.makeExecutableSchema({
        typeDefs: schemaString
    });
    gqltools.addMockFunctionsToSchema({
        schema
    });

    it("should return a valid value", function () {
        let query = `query ValidValue{
            episodes {
              name
            }
        }`
        gql.graphql(schema, query).then((result) => {
            console.log(result.data.episodes)
            expect(result.data.episodes).toBeTruthy()
        })
    });

    it("should return useful data (name,id,...)", function () {
        let query = `query FullDataSet{
            episodes {
                name
                id
                season
            }
        }`
        gql.graphql(schema, query).then((result) => {
            result.data.episodes.forEach((episode) => {
                expect(episode.name).toBeTruthy()
                expect(episode.id).toBeTruthy()
                expect(episode.season).toBeTruthy()
                expect(episode.ShouldNotBeThere).toBeFalsy()
            })
        })
    });
});