import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

@Resolver('User')
export class UsersResolver {
  @Query()
  async user(@Args('id') id: number) {
    return {
        id,
        firstName: 'John',
        lastName: 'Smith'
    };
  }

  @ResolveField('attendances')
  async attendances(@Parent() user) {
    return [
        {
            from: '1',
            to: '2'
        }
    ];
  }
}