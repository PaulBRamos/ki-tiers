{{#if chars}}
    <div class="tier-row">
        <div class="tier-label-container" style="background: #{{tierColor name}};">
            <span class="tier-label">{{name}}</span>
        </div>
        <div class="tier-chars">
            {{#each chars}}
                <div class="char-container" style="position: relative;">
                    {{!-- <span class="tier-number">{{@index}}</span> --}}
                    <img class="char-image load-char" data-name="{{name}}" src="img/chars/ki3_{{toLower name}}.gif">
                </div>
            {{/each}}
        </div>
    </div>
{{/if}}