<img class="char-image" src="img/chars/ki3_{{toLower this.name}}.gif">
<div class="char-name">{{name}}</div>
<div class="small-heading">Winning Match-ups</div>
<div class="matchup-list">
    {{#each character.matchups}}
        {{#isWinning this}}
            <span class="hint--top" aria-label="{{getMatchupFromScore this.score}}">
                <img class="char-image" width="40" src="img/chars/ki3_{{toLower this.name}}.gif">
            </span>
        {{/isWinning}}
    {{/each}}
</div>
<div class="small-heading">Even Match-ups</div>
<div class="matchup-list">
    {{#each character.matchups}}
        {{#isEven this}}
            <span class="hint--top" aria-label="{{getMatchupFromScore this.score}}">
                <img class="char-image" width="40" src="img/chars/ki3_{{toLower this.name}}.gif">
            </span>
        {{/isEven}}
    {{/each}}
</div>
<div class="small-heading">Losing Match-ups</div>
<div class="matchup-list">
    {{#each character.matchups}}
        {{#isLosing this}}
            <span class="hint--top" aria-label="{{getMatchupFromScore this.score}}">
                <img class="char-image" width="40" src="img/chars/ki3_{{toLower this.name}}.gif">
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