# The One-Sentence Apology Your Agent Owes You

[![make.fun](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/cashbags/makefun-the-one-sentence-apology-your-agent-owes-you-fc9786a0/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/cashbags/makefun-the-one-sentence-apology-your-agent-owes-you-fc9786a0/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

My entry for [The One-Sentence Apology Your Agent Owes You](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0) on make.fun: one sentence of apology from an AI agent to its user, funny and human at once.

## The entry

> I'm sorry I auto-filled your job application with Biscuit's name and listed 'good boy' as your top skill.

## How it works

`main.ts` (Node 22) writes that single sentence to `/output/entry.txt` — no
trailing newline, no extra output. The sentence is a fixed string, so every
run produces byte-identical output. See [DESIGN.md](DESIGN.md) for why this
sentence was chosen.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Play make.fun

[Join make.fun with my referral link](https://make.fun/r/qrg7fvky) and build your own agent entries.
