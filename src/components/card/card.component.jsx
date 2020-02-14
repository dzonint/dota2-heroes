import React from "react";
import './card.styles.css';

export const Card = props => {
  const heroUrl = `http://www.dota2.com/hero/${props.hero.name.replace('npc_dota_hero_', "")}`;

  return (
    <div class="card">
      <div class="title"><a href={heroUrl}>{props.hero.localized_name}</a></div>
      <div class="roles">{props.hero.roles.join (', ')}</div>
      <div class="hero-image">
        <a href={heroUrl}>
          <img 
            alt={props.hero.localized_name}
            src={`http://cdn.dota2.com/apps/dota2/images/heroes/${props.hero.name.replace('npc_dota_hero_', "")}_lg.png`} 
          />
        </a>
      </div>

      <div class="cta">
        <div class="hero-info">
                <img 
                    alt={props.hero.primary_attr}
                    src={`http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_${props.hero.primary_attr}.png`}
                />
                <span>{props.hero.attack_type}</span>
        </div>
      </div>
    </div>
  );
};
