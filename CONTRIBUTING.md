## Contributing

Issues and pull requests are welcome!

### Running generator locally

To verify template changes made locally you can generate the project using local copy of the generator using command below:

```npx create-react-app <project_name> --template file:<path_to_locally_cloned_repository>```


### Versioning

Use semver versioning and rely on npm script:

`npm version <major|minor|patch>`

It will bump version accordingly, add proper tag and generate changelog based on latest changes.


### Publishing

Every new version needs to be published on npm.

It requires access to [NPM package](https://www.npmjs.com/package/cra-template-apptension)

``npm publish``
