# use-global-storage

React Hook to connect storage and state. You can use this as a global state manager in React.

## Install

via npm:

```
npm install use-global-storage
```

via yarn:

```
yarn add use-global-storage
```

## Usage

```js
import useGlobalStorage from 'use-global-storage';

const useStorage = useGlobalStorage({
  storageOptions: { name: 'test-db' }
});

const Counter = () => {
  const [state, setState] = useStorage('counter');
  return (
    <div className="Counter">
      <p>
        Counter:
        {state || 0}
      </p>
      <button type="button" onClick={() => setState(state + 1)}>
        +1 to global
      </button>
    </div>
  );
};
```
