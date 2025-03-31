package com.zblog.zblogcommentcore.config;

import graphql.language.IntValue;
import graphql.schema.Coercing;
import graphql.schema.CoercingParseLiteralException;
import graphql.schema.CoercingParseValueException;
import graphql.schema.CoercingSerializeException;
import graphql.schema.GraphQLScalarType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GraphQLScalarConfig {

    @Bean
    public GraphQLScalarType longScalar() {
        return GraphQLScalarType.newScalar()
                .name("Long")
                .description("A custom scalar for 64-bit integers")
                .coercing(new Coercing<Long, Long>() {
                    @Override
                    public Long serialize(Object dataFetcherResult) throws CoercingSerializeException {
                        if (dataFetcherResult instanceof Long) {
                            return (Long) dataFetcherResult;
                        }
                        if (dataFetcherResult instanceof Integer) {
                            return ((Integer) dataFetcherResult).longValue();
                        }
                        throw new CoercingSerializeException("Unable to serialize " + dataFetcherResult + " as a Long");
                    }

                    @Override
                    public Long parseValue(Object input) throws CoercingParseValueException {
                        if (input instanceof Long) {
                            return (Long) input;
                        }
                        if (input instanceof Integer) {
                            return ((Integer) input).longValue();
                        }
                        throw new CoercingParseValueException("Unable to parse " + input + " as a Long");
                    }

                    @Override
                    public Long parseLiteral(Object input) throws CoercingParseLiteralException {
                        if (input instanceof IntValue) {
                            return ((IntValue) input).getValue().longValue();
                        }
                        throw new CoercingParseLiteralException("Value is not an integer: " + input);
                    }
                })
                .build();
    }
}
