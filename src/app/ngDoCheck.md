### DOCHECK

- ngDoCheck is usually called upon every event within the application.
- It is very costly to implement.
- Do not implement ngDoCheck alongside ngOnChanges since they basically perform the same thing.
- Look at how you have defined in the rooms component.