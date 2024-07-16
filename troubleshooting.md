- eslint might fail with "import module not found"
fixed by adding to vscode settings
```
"eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ]
```


- missing gap, rowGap, columnGap, TextInput.onPress
@types/react-native is deprecated, but still installed through
@types/react-native-vector-icons, which is installed through
@rneui/base
issues created:
https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70040
https://github.com/react-native-elements/react-native-elements/issues/3915

most likely it's not gonna be resolved anytime soon, as @rneui has 100 open issues

Deleting @types/react-native resolves this issue


- missing <Icon name> property
for some known reason icon name is not in the type, fix is in changing
apps/mobile/node_modules/@rneui/themed/dist/Icon/index.d.ts
reason is that react-native-elements@v4 is in beta
```
PropsWithChildren<IconProps> => PropsWithChildren<IconProps & IconObject>
```
from 
```
declare const _default: import("react").FunctionComponent<import("react").PropsWithChildren<IconProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<IconProps>>>;

```
to
```
declare const _default: import("react").FunctionComponent<import("react").PropsWithChildren<IconProps & IconObject>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<IconProps>>>;

```