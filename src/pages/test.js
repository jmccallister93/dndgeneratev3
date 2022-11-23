const onRemoveConditionBlinded = (e) =>
onRemoveCustom(setConditionList, conditionList, "Blinded");
const onRemoveConditionCharmed = (e) =>
onRemoveCustom(setConditionList, conditionList, "Charmed");
const onRemoveConditionDeafened = (e) =>
onRemoveCustom(setConditionList, conditionList, "Deafened");
const onRemoveConditionExhaustion = (e) =>
onRemoveCustom(setConditionList, conditionList, "Exhaustion");
const onRemoveConditionFrightened = (e) =>
onRemoveCustom(setConditionList, conditionList, "Frightened");
const onRemoveConditionGrappled = (e) =>
onRemoveCustom(setConditionList, conditionList, "Grappled");
const onRemoveConditionIcapacitated = (e) =>
onRemoveCustom(setConditionList, conditionList, "Icapacitated");
const onRemoveConditionInvisible = (e) =>
onRemoveCustom(setConditionList, conditionList, "Invisible");
const onRemoveConditionParalyzed = (e) =>
onRemoveCustom(setConditionList, conditionList, "Paralyzed");
const onRemoveConditionPetrified = (e) =>
onRemoveCustom(setConditionList, conditionList, "Petrified");
const onRemoveConditionPoisoned = (e) =>
onRemoveCustom(setConditionList, conditionList, "Poisoned");
const onRemoveConditionProne = (e) =>
onRemoveCustom(setConditionList, conditionList, "Prone");
const onRemoveConditionRestrained = (e) =>
onRemoveCustom(setConditionList, conditionList, "Restrained");
const onRemoveConditionStunned = (e) =>
onRemoveCustom(setConditionList, conditionList, "Stunned");
const onRemoveConditionUnconscious = (e) =>
onRemoveCustom(setConditionList, conditionList, "Unconscious");

const conditionRemoveBlinded = customDmgRemove(onRemoveConditionBlinded);
const conditionRemoveCharmed = customDmgRemove(onRemoveConditionCharmed);
const conditionRemoveDeafened = customDmgRemove(onRemoveConditionDeafened);
const conditionRemoveExhaustion = customDmgRemove(onRemoveConditionExhaustion);
const conditionRemoveFrightened = customDmgRemove(onRemoveConditionFrightened);
const conditionRemoveGrappled = customDmgRemove(onRemoveConditionGrappled);
const conditionRemoveIcapacitated = customDmgRemove(onRemoveConditionIcapacitated);
const conditionRemoveInvisible = customDmgRemove(onRemoveConditionInvisible);
const conditionRemoveParalyzed = customDmgRemove(onRemoveConditionParalyzed);
const conditionRemovePetrified = customDmgRemove(onRemoveConditionPetrified);
const conditionRemovePoisoned = customDmgRemove(onRemoveConditionPoisoned);
const conditionRemoveProne = customDmgRemove(onRemoveConditionProne);
const conditionRemoveRestrained = customDmgRemove(onRemoveConditionRestrained);
const conditionRemoveStunned = customDmgRemove(onRemoveConditionStunned);
const conditionRemoveUnconscious = customDmgRemove(onRemoveConditionUnconscious);

const conditionDisplay = conditionList.map((i) => {
return (
  <div>
    <h3>
      {i.name}
      {i.name === "Blinded"
        ? conditionRemoveBlinded
        : i.name === "Charmed"
        ? conditionRemoveCharmed
        : i.name === "Deafened"
        ? conditionRemoveDeafened
        : i.name === "Exhaustion"
        ? conditionRemoveExhaustion
        : i.name === "Frightened"
        ? conditionRemoveFrightened
        : i.name === "Grappled"
        ? conditionRemoveGrappled
        : i.name === "Icapacitated"
        ? conditionRemoveIcapacitated
        : i.name === "Invisible"
        ? conditionRemoveInvisible
        : i.name === "Paralyzed"
        ? conditionRemoveParalyzed
        : i.name === "Petrified"
        ? conditionRemovePetrified
        : i.name === "Poisoned"
        ? conditionRemovePoisoned
        : i.name === "Prone"
        ? conditionRemoveProne
        : i.name === "Restrained"
        ? conditionRemoveRestrained
        : i.name === "Stunned"
        ? conditionRemoveStunned
        : i.name === "Unconscious"
        ? conditionRemoveUnconscious
        : null}
    </h3>
  </div>
);
});