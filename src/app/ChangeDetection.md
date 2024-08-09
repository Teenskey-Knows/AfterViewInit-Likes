### CHANGE DETECTION IN ANGULAR

- Whenever we do an action on the UI, the view needs to be updated.
- Angular does this through changeDetection.

- By default when you run any action, Angular updates the entire application.
- This is not optimal since when you have a lot of compoents then that means the application will be    slow.

- You can use changeDetection strategy to ensure the app is optimal.

#### RULES TO USING CHANGE DETECTION STRATEGY

--- By default changeDetection is on Default and OnPush when it is not default.

- Can only be applied in case one is not modifying the data in the component internally, so essentially when you're using @Input and @Output decorators.

- So the OnPush strategy, in this case should be placed on the Child component.

- Also you can use .OnPush strategy when dealing with State Management.

- 

- 

```typescript
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})

```