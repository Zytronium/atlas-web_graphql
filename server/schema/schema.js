#!/usr/bin/node
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const {GraphQLSchema} = require("graphql/type");

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

const RootQuery = GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {}
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
