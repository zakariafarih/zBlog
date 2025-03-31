package com.zblog.zblogcommentcore.config;

import graphql.schema.GraphQLScalarType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

@Configuration
public class GraphQLWiringConfig {

    private final GraphQLScalarType longScalar;

    public GraphQLWiringConfig(GraphQLScalarType longScalar) {
        this.longScalar = longScalar;
    }

    @Bean
    public RuntimeWiringConfigurer runtimeWiringConfigurer() {
        return builder -> builder.scalar(longScalar);
    }
}
