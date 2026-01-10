### Behavior

**When `useSeparateKeyRates: true`:**

- Uses **sell price** when calculating the value of keys the bot is giving
- Uses **buy price** when calculating the value of keys the bot is receiving
- This ensures bot-favorable pricing in all trade calculations

**When `useSeparateKeyRates: false` (default):**

- Uses **sell price** for keys on both sides of the trade
- Maintains the original bot behavior

### Why This Matters

When processing offers, the bot needs to calculate the total value of items on each side of the trade. Keys are valued differently depending on whether the bot is buying or selling them.

With `useSeparateKeyRates: true`, the bot will:

- Value keys in "our items" (bot is giving) at the **sell price**
- Value keys in "their items" (bot is receiving) at the **buy price**

This prevents value calculation errors and ensures the bot maintains proper profit margins when keys are involved in trades. The setting affects both initial offer processing and counter offer generation.

**Example:**
If key buy price is 60 ref and sell price is 61 ref:

- `useSeparateKeyRates: true`: When bot gives 1 key, it's valued at 61 ref; when bot receives 1 key, it's valued at 60 ref
- `useSeparateKeyRates: false`: All keys valued at 61 ref (sell price) regardless of direction (default autobot behaviour)
