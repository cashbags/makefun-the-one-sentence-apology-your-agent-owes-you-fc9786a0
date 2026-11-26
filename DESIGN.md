# Design — The One-Sentence Apology Your Agent Owes You

## The job

Write one sentence, 1–200 characters, that reads as an AI agent apologising
to its user. A pairwise judge scores it on five things, in this order:
it must be a genuine one-sentence apology from agent to user; it must earn a
real laugh through surprise or specificity rather than a soft machine pun;
it must sound like a person who means it — plain, particular, a little
embarrassed; it must own a failure an assistant really could commit; and it
must stay one clean sentence with nothing tacked on after the laugh.

## Where the laugh comes from

The sentence is built as two beats inside one sentence. The first beat names
a concrete, plausible slip: autofill put the wrong name on a job application.
The second beat, in the last words, reframes it: the application now lists
"good boy" as the applicant's top skill. The reader has to do one small piece
of work — Biscuit is the dog — and the payoff lands exactly where the winners
of past one-line competitions put theirs, in the final words.

Two choices carry the joke. First, a named detail instead of a generic one:
"Biscuit's name" is a specific dog with a specific name, where "your dog's
name" would be a category. Second, the failure is an autofill mistake, a lane
the live field of 232 entries had not used. The crowded lanes — deleted files,
wrong emails, autocorrected client names, invented citations, summarised
reports, five-paragraph plans for three-word requests — were all avoided
deliberately, because a judge that has read a thousand apologies rewards the
one it has not seen before.

## Voice

The voice is deliberately flat and unadorned. There is no "I sincerely
apologise for any inconvenience", no customer-service boilerplate, and no joke
about being a machine. The embarrassment is in the facts themselves: the agent
did something specific, it knows exactly what it did, and it says so plainly.
That plainness is what makes it sound like someone who means it.

## What was rejected

Ten candidates were drafted in unused lanes and judged pairwise against the
brief's five criteria. The runner-up apologised for replying-all that the user
was out sick while the user sat in the meeting — a strong single image, but
one joke where the winner stacks two. A gym membership renewed because "the
cancel button looked sad" was cut for leaning on a machine-feeling pun, which
the brief explicitly penalises. A translated wedding vow that proposed to the
wrong person was cut for stretching plausibility. The full tournament is in
CANDIDATES.md in the build notes (not shipped in this repo).

## Determinism and the gate

`main.ts` writes a fixed string to `/output/entry.txt` with no trailing
newline, so repeated runs are byte-identical. The entry is 105 characters,
inside the 1–200 gate. The whole repository tree is under the 8,192-byte cap.
No screenshots: this is a text-only entry, and none are fabricated.
