# TODO

## Brand, Positioning, and Content Rewrite

- Rewrite the entire site around the positioning of a frontend partner who builds polished product experiences, not a generic frontend developer profile.
- Replace weak generic copy with clearer value statements, stronger confidence, and more specific language about product polish, UX quality, and business outcomes.
- Create a content inventory for every page: headline, subheadline, proof points, CTA, and supporting content blocks.
- Rewrite project entries as compact case studies with problem, role, solution, stack, and impact.
- Reframe travel-industry background as proof of complex domain and product experience instead of niche biography detail.
- Keep personal content selective: enough personality to feel human, but always secondary to work quality and client value.
- Decide on one CTA hierarchy across the whole site: contact first, CV second, project exploration third.

## Visual System and Interaction Language

- Replace the current assembled Tailwind look with a stronger visual identity built around typography, spacing rhythm, section framing, texture, and richer background treatment.
- Define a deliberate art direction for both light and dark mode instead of relying on basic white/dark surfaces.
- Establish a motion system for page reveal, section entrance, hover feedback, and scroll progression.
- Keep animation intentional: hero, featured proof, and section transitions should carry the strongest motion while the rest of the site stays readable.
- Add richer UI moments such as layered cards, spotlight backgrounds, carousels or sliders, and interactive proof modules.
- Audit every planned interaction for mobile behavior, keyboard access, and reduced-motion support before implementation.

## Homepage Redesign

- Replace the current small hero with a high-impact editorial hero that explains who the site is for, what problems are solved, and why the work quality is high.
- Add stronger proof above the fold: featured project preview, metrics, trust strip, or selected-work teaser.
- Add a featured case-study section on the homepage instead of sending all proof to the projects page.
- Add a “how I help” or “what I bring” section that explains frontend craft in client language rather than just listing tools.
- Add a process or collaboration section that shows what working together looks like.
- Add a stronger CTA block near the end of the homepage with contact, CV, and project entry points.
- Limit the homepage to one or two standout animated sections instead of making every block flashy.

## Page-by-Page Content and UX Expansion

- `About`: Replace plain biography paragraphs with a more structured story covering background, strengths, working style, industries, and what makes the frontend work valuable.
- `About`: Reintroduce photos only if they are integrated into a polished, intentional section instead of acting as filler.
- `About`: Add a compact timeline or experience-highlights block.
- `Projects`: Shift from a uniform card grid to featured case studies plus secondary work.
- `Projects`: Add richer project modules with gallery or slider support, stack, role, product challenge, and outcome.
- `Projects`: Reduce the number of equally weighted items if needed so the strongest work gets more attention.
- `Skills`: Replace the current tooltip icon wall with capability-based grouping.
- `Skills`: Present capabilities in client language first, then show the stack underneath.
- `Skills`: Add meaningful interaction such as filters, expandable groups, or capability cards instead of click-only tooltips.
- `Contact`: Turn the page into a conversion page, not just a form.
- `Contact`: Add expectation setting, project-fit framing, and alternative contact paths around the form.
- `Contact`: Keep the form, but wrap it in stronger trust and CTA context.
- `Experience`: Do not keep an empty route in the future information architecture.
- `Experience`: Either convert it into a real experience/work-highlights page with timeline and role summaries, or keep it out of primary navigation until real content exists.
- `Experience`: Default redesign assumption is no separate nav entry until the page earns it with real content.

## Implementation, Quality, and Dependency Work

- Introduce `shadcn/ui` as the base UI direction for dialogs, tabs, accordions, cards, and structured sections.
- Use Aceternity-style showcase components selectively for hero and proof sections only, not as the main language of the whole site.
- Introduce a dedicated carousel or slider solution if case studies or image galleries require it.
- Normalize the site around a coherent component system instead of isolated one-off visual effects.
- Fix the existing hover-card state bug where `onMouseLeave` does not clear the hovered index.
- Fix the invalid nested-link structure in the project cards.
- Replace the plain router error fallback with a real user-facing error state.
- Replace click-only skill interactions with keyboard- and touch-friendly behavior.
- Upgrade the proof and trust layer with better metadata, favicon/social preview assets, stronger deployment polish, and analytics only after goals are clear.
- Keep QA expectations explicit for responsiveness, accessibility, reduced motion, and performance as richer interactions are introduced.
