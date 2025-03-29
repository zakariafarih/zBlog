package com.zblog.zblogpostcore.config;

import graphql.language.IntValue;
import graphql.schema.*;
import graphql.schema.idl.RuntimeWiring;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

@Configuration
public class GraphQLConfig implements RuntimeWiringConfigurer {

    @Override
    public void configure(RuntimeWiring.Builder builder) {
        GraphQLScalarType longScalar = GraphQLScalarType.newScalar()
                .name("Long")
                .description("A custom scalar for 64-bit integers")
                .coercing(new Coercing<Long, Long>() {
                    @Override
                    public Long serialize(Object dataFetcherResult) throws CoercingSerializeException {
                        if (dataFetcherResult instanceof Long) {
                            return (Long) dataFetcherResult;
                        }
                        throw new CoercingSerializeException("Unable to serialize non-Long");
                    }

                    @Override
                    public Long parseValue(Object input) throws CoercingParseValueException {
                        if (input instanceof Number) {
                            return ((Number) input).longValue();
                        }
                        throw new CoercingParseValueException("Value is not a valid Long");
                    }

                    @Override
                    public Long parseLiteral(Object input) throws CoercingParseLiteralException {
                        if (input instanceof IntValue) {
                            return ((IntValue) input).getValue().longValue();
                        }
                        throw new CoercingParseLiteralException("Value is not a valid Long literal");
                    }
                })
                .build();

        builder.scalar(longScalar);
    }
}
