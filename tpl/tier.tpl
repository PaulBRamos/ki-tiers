{{#if chars}}
    <div class="tier-row">
        <div class="tier-label-container" style="background: #{{tierColor name}};">
            <span class="tier-label">{{name}}</span>
        </div>
        <div class="tier-chars">
            {{#each chars}}
                <img class="char-image" data-name="{{name}}"src="img/chars/ki3_{{toLower name}}.gif">
            {{/each}}
        </div>
    </div>
{{/if}}