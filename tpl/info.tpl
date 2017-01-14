<img class="char-image main-char-image" src="img/chars/{{toLower this.name}}.png">
<div class="char-name">{{name}}</div>
<div class="small-heading">Winning Match-ups</div>
<div class="matchup-list">
    {{#each character.matchups}}
        {{#isWinning this}}
            <span class="hint--top" aria-label="{{getMatchupFromScore this.score}}">
                <img class="char-image" src="img/chars/{{toLower this.name}}.png">
            </span>
        {{/isWinning}}
    {{/each}}
</div>
<div class="small-heading">Even Match-ups</div>
<div class="matchup-list">
    {{#each character.matchups}}
        {{#isEven this}}
            <span class="hint--top" aria-label="{{getMatchupFromScore this.score}}">
                <img class="char-image" src="img/chars/{{toLower this.name}}.png">
            </span>
        {{/isEven}}
    {{/each}}
</div>
<div class="small-heading">Losing Match-ups</div>
<div class="matchup-list">
    {{#each character.matchups}}
        {{#isLosing this}}
            <span class="hint--top" aria-label="{{getMatchupFromScore this.score}}">
                <img class="char-image" src="img/chars/{{toLower this.name}}.png">
            </span>
        {{/isLosing}}
    {{/each}}
</div>
<div class="small-heading">Chart confidence: {{score}}</div>

<div style="text-align: right;">
    <span class="sub-heading">
        Match-up data provided by
    </span>
    <a href="https://twitter.com/{{getTwitterWithoutAt this.reference}}" class="twitter-follow-button" data-show-count="false">Follow {{this.reference}}</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>